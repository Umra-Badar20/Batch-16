class admissionForm{
    fill(name , grade){
        this.name = name
        this.appliedGrade = grade
    }
    submit(){
        console.log(this.name +" form submitted for grade "+ this.appliedGrade);      
    }
    cancel(){
        console.log(this.name +" form cancelled for grade "+ this.appliedGrade);      
    }
}
let umra = new admissionForm()
let aliza = new admissionForm()
umra.fill("Umra", 10)
aliza.fill("Aliza", 12)
umra.submit()
aliza.submit()
aliza.cancel()