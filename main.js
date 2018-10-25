Vue.component('input-message', {
  data: function () {
		return {
						myname: '',
            content: '',
						messages:	[
								{ message: 'Foo' , name: 'ivan' },
								{ message: 'Bar' , name: 'Vasya' },
								{ message: 'Bar' , name: 'Vasya' },
								{ message: 'Bar' , name: 'Vasya' },
								{ message: 'Bar' , name: 'Vasya' }
								]
        };
  },
	methods: {
        onKeyup (e) {
            if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
                this.sendMessage(this.myname,this.content);
            }
        },

				sendMessage (content,name) {
            this.messages.push({
                message: content,
								name: name//,
                //date: new Date()
            });
						this.content = '';
        }
   },
	 filters: {
			 time (date) {
					 if (typeof date === 'string') {
							 date = new Date(date);
					 }
					 return date.getHours() + ':' + date.getMinutes();
			 }
	 },
  template: '<div class="chat"><ul class="messages"> <li v-for="item in messages"><span class="name">{{ item.name }}</span> {{ item.message }} </li></ul><input class="name" type="text" v-model="myname"><br><textarea cols="50" rows="4" v-model="content" v-on:keyup="onKeyup"></textarea><button v-on:click="sendMessage(myname,content);">Отправить</button></div>'
}// {{ item.date }}
);

new Vue ({
	el: '#app',
	data: {
		title: "Hello World!"
	}
	// },
  // components: {
  //   'chat-messages': chat-messages,
	// 	'input-message': input-message
  // }
});
