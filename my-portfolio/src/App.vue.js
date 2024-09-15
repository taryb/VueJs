import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
        const isMobileMenuOpen = ref(false);
        // Function to toggle the mobile menu
        const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value;
        };
        return { isMobileMenuOpen, toggleMobileMenu };
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full z-20 top-0 left-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container flex flex-wrap justify-between items-center mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/"), ...{ class: ("flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("https://via.placeholder.com/40"), ...{ class: ("mr-3 h-8") }, alt: ("Logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("self-center text-2xl font-semibold whitespace-nowrap text-gray-800") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleMobileMenu) }, type: ("button"), ...{ class: ("inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200") }, "aria-controls": ("navbar"), "aria-expanded": ("false"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("sr-only") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("w-6 h-6") }, "aria-hidden": ("true"), fill: ("currentColor"), viewBox: ("0 0 20 20"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ "fill-rule": ("evenodd"), d: ("M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"), "clip-rule": ("evenodd"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (({ 'hidden': !__VLS_ctx.isMobileMenuOpen })) }, ...{ class: ("w-full md:flex md:w-auto md:items-center") }, id: ("navbar"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/about"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }));
    const __VLS_8 = __VLS_7({ to: ("/about"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/projects"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }));
    const __VLS_14 = __VLS_13({ to: ("/projects"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/contact"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }));
    const __VLS_20 = __VLS_19({ to: ("/contact"), ...{ class: ("block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pt-16") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2.5'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['self-center'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['whitespace-nowrap'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['inline-flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['ml-3'];
    __VLS_styleScopedClasses['text-sm'];
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['md:hidden'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-gray-200'];
    __VLS_styleScopedClasses['sr-only'];
    __VLS_styleScopedClasses['w-6'];
    __VLS_styleScopedClasses['h-6'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['md:flex'];
    __VLS_styleScopedClasses['md:w-auto'];
    __VLS_styleScopedClasses['md:items-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['md:flex-row'];
    __VLS_styleScopedClasses['md:space-x-8'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['md:mt-0'];
    __VLS_styleScopedClasses['md:text-sm'];
    __VLS_styleScopedClasses['md:font-medium'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['pl-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:text-blue-700'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['pl-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:text-blue-700'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['pl-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:text-blue-700'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['pl-3'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['hover:text-blue-700'];
    __VLS_styleScopedClasses['pt-16'];
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
