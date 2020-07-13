const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
	car('Ford', 'Focus', 'Max', 2016, '+380 96 567 54 65', 'images/focus.jpeg'),
	car('Ford', 'Mondeo', 'Volodumur', 2018, '+380 96 567 64 53', 'images/mondeo.jpg'),
	car('Porshe', 'Panamera', 'Iryna', 2015, '+380 96 567 12 34', 'images/porshe.jpg')	
]


new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		logs: [],
		selectCarIndex: 0,
		phoneVisibility: false,
		search:'',
		modalVisibility: false
	},
	methods: {
		selectCar(index) {
			this.car = cars[index]
			this.selectCarIndex = index
		},
		newOrder() {
			this.modalVisibility = false
			this.logs.push(
				log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
			)
		},
		cancelOrder() {
			this.modalVisibility = false
			this.logs.push(
				log(`Sunceled order: ${this.car.name} - ${this.car.model}`, 'cnl')
			)
		}
	},
	computed: {
		phoneBtnText(){
			return this.phoneVisibility ? 'Hide phone' : 'Show phone'
		},
		filteredCars() { 
			return this.cars.filter(car =>{
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
			})
		}
	},
	filters:{
		date(value) {
			return value.toLocaleString()
		}
	}	
})