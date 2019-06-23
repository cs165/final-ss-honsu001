//
// TODO(you): Add the JavaScript necessary to complete your final project.
//
class Home{
	constructor(diary){
		this.home_container = document.querySelector("#home");
		this.home_container.classList.remove("inactive");
		this.button_container = document.querySelector("#button");
		
		this.diary = diary;
		
		this.Onclick = this.Onclick.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		
		this.button_container.addEventListener("click", this.Onclick);
	}
	
	async Onclick(){
		const result = await fetch
		('/api/', 
			{method:'GET', 
				headers :
				{
					'Accept':'application/json',
					'Content-Type':'application/json'
				}
			}
		); 
		const data = await result.json();
		this.diary = new Diary(data);
		this.hide();
		this.diary.show();
	}
	
	show(){
		this.home_container.classList.remove("inactive");
	}
	hide(){
		this.home_container.classList.add("inactive");
	}
}