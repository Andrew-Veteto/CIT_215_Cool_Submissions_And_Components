Vue.component('codenames', {
    data: function() {
        return {
            toggle: false
        }
    },
    props: ['name', 'codename'],
    template: `
        <div v-on:click='toggle = !toggle'> 
            <p v-bind:class="{'hidden': toggle}">{{name}}</p>
            <p v-bind:class="{'hidden': !toggle}">{{codename}}</p>
        </div>
        `
});

new Vue({
    el: "#mainEle",
    data: {
        codenames:[
            {
                name:"Protagonist",
                codename:"Joker"
            },
            {
                name:"Anne",
                codename:"Panther"
            },
            {
                name:"Ryuji",
                codename:"Skull"
            }
        ],
        name:"",
        email:"",
        message:""
    },
    computed: {
        checkName: function() {
            if(this.goodName()) {
                this.message = "";
                this.submit();
            }
            else {
                this.message = "Not enough characters";
            }
        },
        checkEmail: function() {
            if(this.goodEmail()) {
                this.message = "";
                this.submit();
            }
            else {
                this.message = "Email needs to be in format: example@example.com";
            }
        }
    },
    methods: {
        goodName: function() {
            return (!(this.name.length <= 2));
        },
        goodEmail: function() {
            var emailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return this.email.match(emailform);
        },
        submit: function() {
            if(this.goodName() && this.goodEmail()) {
                this.message = "Submitted";
            }
        }
    },
    watch: {
        name: function() {
            this.checkName();
        },
        email: function() {
            this.checkEmail();
        }
    }
})