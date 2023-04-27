const app = Vue.createApp({
    data: function()    {
        return  {
            product: 'Socks',
            description: 'Warm and fuzzy!'
        }
    }
})

//The shorthand version of this is:
// const app = Vue.createApp({
//     data()    {
//         return  {
//             product: 'Socks'
//         }
//     }
// })

