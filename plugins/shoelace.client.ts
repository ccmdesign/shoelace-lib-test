// plugins/shoelace.ts
export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    import('@shoelace-style/shoelace/dist/utilities/base-path').then(({ setBasePath }) => {
      setBasePath('/shoelace');

      import('@shoelace-style/shoelace/dist/components/card/card.js');
      import('@shoelace-style/shoelace/dist/components/button/button.js');
      import('@shoelace-style/shoelace/dist/components/badge/badge.js');
      import('@shoelace-style/shoelace/dist/components/icon/icon.js');
      import('@shoelace-style/shoelace/dist/components/select/select.js');

      import('@shoelace-style/shoelace/dist/translations/es.js');
      import('@shoelace-style/shoelace/dist/translations/fr.js');
      import('@shoelace-style/shoelace/dist/translations/en.js');
      
      import('@shoelace-style/shoelace/dist/components/input/input.js');
      import('@shoelace-style/shoelace/dist/components/textarea/textarea.js');
      import('@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js');
      
      import('@shoelace-style/shoelace/dist/components/alert/alert.js');
      

      // import('@shoelace-style/shoelace/dist/components/icon-button/icon-button.js');
      // import('@shoelace-style/shoelace/dist/components/animated-image/animated-image.js');
      // import('@shoelace-style/shoelace/dist/components/animation/animation.js');
      // import('@shoelace-style/shoelace/dist/components/avatar/avatar.js');
      // import('@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js');
      // import('@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js');
      // import('@shoelace-style/shoelace/dist/components/button/button.js');
      // import('@shoelace-style/shoelace/dist/components/button-group/button-group.js');
      // import('@shoelace-style/shoelace/dist/components/carousel/carousel.js');
      // import('@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js');
      // import('@shoelace-style/shoelace/dist/components/checkbox/checkbox.js');
      // import('@shoelace-style/shoelace/dist/components/color-picker/color-picker.js');
      // import('@shoelace-style/shoelace/dist/components/details/details.js');
      // import('@shoelace-style/shoelace/dist/components/dialog/dialog.js');
      // import('@shoelace-style/shoelace/dist/components/divider/divider.js');
      // import('@shoelace-style/shoelace/dist/components/drawer/drawer.js');
      // import('@shoelace-style/shoelace/dist/components/dropdown/dropdown.js');
      // import('@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.js');
      // import('@shoelace-style/shoelace/dist/components/format-date/format-date.js');
      // import('@shoelace-style/shoelace/dist/components/format-number/format-number.js');
      // import('@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js');
      // import('@shoelace-style/shoelace/dist/components/include/include.js');
      // import('@shoelace-style/shoelace/dist/components/input/input.js');
      // import('@shoelace-style/shoelace/dist/components/menu/menu.js');
      // import('@shoelace-style/shoelace/dist/components/menu-item/menu-item.js');
      // import('@shoelace-style/shoelace/dist/components/menu-label/menu-label.js');
      // import('@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.js');
      // import('@shoelace-style/shoelace/dist/components/option/option.js');
      // import('@shoelace-style/shoelace/dist/components/popup/popup.js');
      // import('@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js');
      // import('@shoelace-style/shoelace/dist/components/qr-code/qr-code.js');
      // import('@shoelace-style/shoelace/dist/components/radio/radio.js');
      // import('@shoelace-style/shoelace/dist/components/radio-button/radio-button.js');
      // import('@shoelace-style/shoelace/dist/components/radio-group/radio-group.js');
      // import('@shoelace-style/shoelace/dist/components/range/range.js');
      // import('@shoelace-style/shoelace/dist/components/rating/rating.js');
      // import('@shoelace-style/shoelace/dist/components/relative-time/relative-time.js');
      // import('@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.js');
      // import('@shoelace-style/shoelace/dist/components/skeleton/skeleton.js');
      // import('@shoelace-style/shoelace/dist/components/spinner/spinner.js');
      // import('@shoelace-style/shoelace/dist/components/split-panel/split-panel.js');
      // import('@shoelace-style/shoelace/dist/components/switch/switch.js');
      // import('@shoelace-style/shoelace/dist/components/tab/tab.js');
      // import('@shoelace-style/shoelace/dist/components/tab-group/tab-group.js');
      // import('@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js');
      // import('@shoelace-style/shoelace/dist/components/tag/tag.js');
      // import('@shoelace-style/shoelace/dist/components/tooltip/tooltip.js');
      // import('@shoelace-style/shoelace/dist/components/tree/tree.js');
      // import('@shoelace-style/shoelace/dist/components/tree-item/tree-item.js');
      // import('@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js');
    });
  }
});