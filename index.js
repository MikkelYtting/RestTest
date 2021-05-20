const baseUri = "http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=e07b0989a4804d8de8024945897ceec2&units=metric"


Vue.createApp({
    data() {
        return {
            vejrdata: null,
            error: null        
        }
    },

    async created() { // created() is a life cycle method, not an ordinary method
        console.log("created method called")
        this.helperGetPosts(baseUri)
    },

    methods: {
        async helperGetPosts(uri) {
            try {
                const response = await axios.get(uri)
                this.vejrdata = await response.data
                this.error = null
            } catch (ex) {
                this.vejrdata = null
                this.error = ex.message
            }
        }
    }
}).mount("#app")
