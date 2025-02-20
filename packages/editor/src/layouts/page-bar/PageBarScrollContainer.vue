<template>
  <div class="m-editor-page-bar" ref="pageBar">
    <slot name="prepend"></slot>

    <div v-if="canScroll" class="m-editor-page-bar-item m-editor-page-bar-item-icon" @click="scroll('left')">
      <Icon :icon="ArrowLeftBold"></Icon>
    </div>

    <div
      v-if="(type === NodeType.PAGE && pageLength) || (type === NodeType.PAGE_FRAGMENT && pageFragmentLength)"
      class="m-editor-page-bar-items"
      ref="itemsContainer"
      :style="`width: ${itemsContainerWidth}px`"
    >
      <slot></slot>
    </div>

    <div v-if="canScroll" class="m-editor-page-bar-item m-editor-page-bar-item-icon" @click="scroll('right')">
      <Icon :icon="ArrowRightBold"></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  type ComputedRef,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type WatchStopHandle,
} from 'vue';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
import Sortable, { SortableEvent } from 'sortablejs';

import { Id, NodeType } from '@tmagic/core';

import Icon from '@editor/components/Icon.vue';
import type { PageBarSortOptions, Services } from '@editor/type';

defineOptions({
  name: 'MEditorPageBarScrollContainer',
});

const props = defineProps<{
  type: NodeType.PAGE | NodeType.PAGE_FRAGMENT;
  pageBarSortOptions?: PageBarSortOptions;
}>();

const services = inject<Services>('services');
const editorService = services?.editorService;
const uiService = services?.uiService;

const itemsContainer = ref<HTMLElement>();
const canScroll = ref(false);

const showAddPageButton = computed(() => uiService?.get('showAddPageButton'));
const showPageListButton = computed(() => uiService?.get('showPageListButton'));

const itemsContainerWidth = ref(0);

const setCanScroll = () => {
  // 减去新增、左移、右移三个按钮的宽度
  // 37 = icon width 16 + padding 10 * 2 + border-right 1
  itemsContainerWidth.value =
    (pageBar.value?.clientWidth || 0) -
    37 * 2 -
    (showAddPageButton.value ? 37 : 21) -
    (showPageListButton.value ? 37 : 0);

  nextTick(() => {
    if (itemsContainer.value) {
      canScroll.value = itemsContainer.value.scrollWidth - itemsContainerWidth.value > 1;
    }
  });
};

const resizeObserver = new ResizeObserver(() => {
  setCanScroll();
});

const pageBar = ref<HTMLDivElement>();
onMounted(() => {
  pageBar.value && resizeObserver.observe(pageBar.value);
});

onBeforeUnmount(() => {
  resizeObserver.disconnect();
});

let translateLeft = 0;

const scroll = (type: 'left' | 'right' | 'start' | 'end') => {
  if (!itemsContainer.value) return;

  const maxScrollLeft = itemsContainer.value.scrollWidth - itemsContainerWidth.value;

  if (type === 'left') {
    translateLeft += 100;

    if (translateLeft > 0) {
      translateLeft = 0;
    }
  } else if (type === 'right') {
    translateLeft -= 100;

    if (-translateLeft > maxScrollLeft) {
      translateLeft = -maxScrollLeft;
    }
  } else if (type === 'start') {
    translateLeft = 0;
  } else if (type === 'end') {
    translateLeft = -maxScrollLeft;
  }

  itemsContainer.value.style.transform = `translate(${translateLeft}px, 0px)`;
};

const pageLength = computed(() => editorService?.get('pageLength') || 0);
const pageFragmentLength = computed(() => editorService?.get('pageFragmentLength') || 0);

const crateWatchLength = (length: ComputedRef<number>) =>
  watch(
    length,
    (length = 0, preLength = 0) => {
      setTimeout(() => {
        setCanScroll();
        if (length < preLength) {
          scroll('start');
        } else {
          scroll('end');
        }
        if (length > 1) {
          const el = document.querySelector('.m-editor-page-bar-items') as HTMLElement;
          let beforeDragList: Id[] = [];
          const options = {
            ...{
              dataIdAttr: 'page-id', // 获取排序后的数据
              onStart: async (event: SortableEvent) => {
                if (typeof props.pageBarSortOptions?.beforeStart === 'function') {
                  await props.pageBarSortOptions.beforeStart(event, sortable);
                }
                beforeDragList = sortable.toArray();
              },
              onUpdate: async (event: SortableEvent) => {
                await editorService?.sort(
                  beforeDragList[event.oldIndex as number],
                  beforeDragList[event.newIndex as number],
                );
                if (typeof props.pageBarSortOptions?.afterUpdate === 'function') {
                  await props.pageBarSortOptions.afterUpdate(event, sortable);
                }
              },
            },
            ...{
              ...(props.pageBarSortOptions ? props.pageBarSortOptions : {}),
            },
          };
          if (!el) return;
          const sortable = new Sortable(el, options);
        }
      });
    },
    {
      immediate: true,
    },
  );

let unWatchPageLength: WatchStopHandle | null;
let unWatchPageFragmentLength: WatchStopHandle | null;

watch(
  () => props.type,
  (type) => {
    if (type === NodeType.PAGE) {
      unWatchPageFragmentLength?.();
      unWatchPageFragmentLength = null;
      unWatchPageLength = crateWatchLength(pageLength);
    } else {
      unWatchPageLength?.();
      unWatchPageLength = null;
      unWatchPageFragmentLength = crateWatchLength(pageFragmentLength);
    }
  },
  {
    immediate: true,
  },
);
</script>
