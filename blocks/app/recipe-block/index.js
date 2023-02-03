const {registerBlockType}=wp.blocks;
const {__}=wp.i18n;
registerBlockType('fireball/recipe', {
    title:__('Recipe', 'recipe'),
    description:__('Provides a short summary of a recipe', 'recipe'),

    category: 'common',
    icon: 'dashicons-nametag',
    keywords: [
        __('Food', 'recipe'),
        __('Ingredients', 'recipe'),
        __('Meal type', 'recipe')

    ],
    supports: {
        html:false
    },
    save:() =>{
        return <p>Thanks!</p>
    }
});