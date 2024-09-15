import { defineComponent, ref } from 'vue';
import { useMainStore } from '@/store/mainStore'; // Import the store
export default defineComponent({
    name: 'Home',
    setup() {
        const store = useMainStore(); // Use the store
        // Local state for new project form
        const newProjectTitle = ref('');
        const newProjectDescription = ref('');
        const newProjectImage = ref(''); // Add a new ref for the image URL
        // Function to add a new project
        const addNewProject = () => {
            if (newProjectTitle.value && newProjectDescription.value && newProjectImage.value) {
                store.addProject({
                    id: store.projectCount + 1,
                    title: newProjectTitle.value,
                    description: newProjectDescription.value,
                    image: newProjectImage.value, // Include the image property
                });
                newProjectTitle.value = '';
                newProjectDescription.value = '';
                newProjectImage.value = ''; // Clear the image input after adding the project
            }
        };
        // Function to remove a project
        const removeProject = (id) => {
            store.removeProject(id);
        };
        return {
            store,
            newProjectTitle,
            newProjectDescription,
            newProjectImage, // Return the image ref
            addNewProject,
            removeProject,
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home bg-gray-50 min-h-screen py-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-5xl font-extrabold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-xl mb-6") }, });
    (__VLS_ctx.store.userName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center space-x-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#projects"), ...{ class: ("bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#contact"), ...{ class: ("bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("projects"), ...{ class: ("py-16 px-4 bg-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-6xl mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-bold text-center text-gray-800 mb-10") }, });
    (__VLS_ctx.store.projectCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8") }, });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.store.projects))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((project.id)), ...{ class: ("project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((project.image)), alt: ("Project Image"), ...{ class: ("w-full h-48 object-cover mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-2xl font-semibold mb-2") }, });
        (project.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-gray-600 mb-4") }, });
        (project.description);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.removeProject(project.id);
                } }, ...{ class: ("text-red-600 hover:underline font-semibold") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ id: ("add-project"), ...{ class: ("py-16 px-4 bg-gray-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-4xl mx-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-bold text-center text-gray-800 mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.addNewProject) }, ...{ class: ("space-y-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Project Title"), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, });
    (__VLS_ctx.newProjectTitle);
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ value: ((__VLS_ctx.newProjectDescription)), placeholder: ("Project Description"), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ placeholder: ("Project Image URL"), ...{ class: ("w-full p-2 border border-gray-300 rounded") }, });
    (__VLS_ctx.newProjectImage);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300") }, });
    __VLS_styleScopedClasses['home'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['py-10'];
    __VLS_styleScopedClasses['hero'];
    __VLS_styleScopedClasses['bg-gradient-to-r'];
    __VLS_styleScopedClasses['from-blue-500'];
    __VLS_styleScopedClasses['to-purple-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-extrabold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['text-blue-600'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['hover:bg-gray-100'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['bg-transparent'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-white'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['hover:bg-white'];
    __VLS_styleScopedClasses['hover:text-blue-600'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['bg-white'];
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
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['hover:shadow-xl'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['h-48'];
    __VLS_styleScopedClasses['object-cover'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-red-600'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['py-16'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['bg-gray-50'];
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-gray-800'];
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
