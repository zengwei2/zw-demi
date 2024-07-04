import { h, ref, defineComponent, Vue, isVue2, isVue3 } from 'vue-demi';

export default defineComponent({
  name: 'AppV',
  created() {
    // Vue2 使用时为 Vue.export.version
    // Vue3 使用时为 Vue.version
    console.log('version', Vue);
    console.log('isVue2', isVue2);
    console.log('isVue3', isVue3);
  },
  setup() {
    const val = ref(1);

    function click() {
      val.value++;
    }

    return { val, click };
  },
  render() {
    return h('div', isVue2 ? { attrs: { id: 'app' } } : { id: 'app' }, [
      h('div', {}, this.val),
      h(
        'button',
        // vue2 和 vue3 不同点
        isVue2 ? { on: { click: this.click } } : { onClick: this.click },
        '点击'
      ),
    ]);
  },
});
