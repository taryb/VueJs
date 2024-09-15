import { defineComponent } from 'vue';
import { useMainStore } from '@/store/mainStore'; // Import the store
export default defineComponent({
    name: 'Projects',
    setup() {
        const store = useMainStore(); // Use the store
        return { store };
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("projects bg-gray-50 min-h-screen py-10 px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-6xl mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold text-center text-gray-800 mb-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8") }, });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.store.projects))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((project.id)), ...{ class: ("project-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((project.image)), alt: ((project.title)), ...{ class: ("w-full h-48 object-cover") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-6") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-2xl font-semibold mb-2") }, });
        (project.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600 mb-4") }, });
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("text-blue-600 hover:underline font-semibold") }, });
    }
    __VLS_styleScopedClasses['projects'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['py-10'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['max-w-6xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-2'];
    __VLS_styleScopedClasses['lg:grid-cols-3'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['project-card'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['hover:shadow-xl'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['font-semibold'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
