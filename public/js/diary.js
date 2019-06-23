//
// TODO(you): Add the JavaScript necessary to complete your final project.
//
class Diary{
	constructor(data){
		this.diary_container = document.querySelector("#diary");
		this.diary_container.classList.remove("inactive");
		this.date_container = document.querySelector("#date");
		this.textarea_container = document.querySelector("#textarea");
		this.textarea_container.classList.remove("inactive");
		this.text_container = document.querySelector("#text");
		this.save_container = document.querySelector("#save");
		this.save_button_container = document.querySelector("#save_button");
		
		let today = new Date();
		this.date = today.toLocaleDateString();
		this.date_container.textContent = this.date;
		this.text_container.textContent = data;
		
		this.Onclick = this.Onclick.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		
		this.save_container.addEventListener("click", this.Onclick);
	}
	
	async Onclick(){
		const result = await fetch
		('/api/', 
			{method:'POST', 
				body:'{"text":"'+this.text_container.value+'"}',
				headers :
				{
					'Accept':'application/json',
					'Content-Type':'application/json'
				}
			}
		);
	}
	
	show(){
		this.diary_container.classList.remove("inactive");
		this.textarea_container.classList.remove("inactive");
		this.save_container.classList.remove("inactive");
	}
	hide(){
		this.diary_container.classList.add("inactive");
		this.textarea_container.classList.add("inactive");
	}
}