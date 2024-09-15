import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'Contact',
    setup() {
        const name = ref('');
        const email = ref('');
        const message = ref('');
        const handleSubmit = () => {
            // Handle the form submission (e.g., send an email or use an API)
            alert(`Message sent! Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
            // Reset form fields
            name.value = '';
            email.value = '';
            message.value = '';
        };
        return {
            name,
            email,
            message,
            handleSubmit
        };
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contact bg-gray-50 min-h-screen py-16 px-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-4xl mx-auto text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl font-bold text-gray-800 mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg text-gray-700 mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, ...{ class: ("space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.name)), type: ("text"), placeholder: ("Your Name"), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), placeholder: ("Your Email"), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, required: (true), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.message)), placeholder: ("Your Message"), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, rows: ("4"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300") }, });
    __VLS_styleScopedClasses['contact'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-gray-800'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-gray-700'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['space-y-4'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-300'];
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
