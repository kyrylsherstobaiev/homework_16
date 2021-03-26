const WRAPPER = document.querySelector('#wrapper');

const GRADATION_TEXT = ["Satisfaction", "Good", "Very Good", "Excellent"];

const ALL_USERS = {
	roles: {
		admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
		student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
		lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
	},
	gradation: [
		[0, 20],
		[20, 55],
		[55, 85],
		[85, 100]
	],
	users: [
		{
			name: "Jack Smith",
			age: 23,
			img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
			role: "student",
			courses: [
				{
					title: "Front-end Pro",
					mark: 20
				},
				{
					title: "Java Enterprise",
					mark: 100
				}
			]
		},
		{
			name: "Amal Smith",
			age: 20,
			img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
			role: "student"
		},
		{
			name: "Noah Smith",
			age: 43,
			img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
			role: "student",
			courses: [
				{
					title: "Front-end Pro",
					mark: 50
				}
			]
		},
		{
			name: "Charlie Smith",
			age: 18,
			img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
			role: "student",
			courses: [
				{
					title: "Front-end Pro",
					mark: 75
				},
				{
					title: "Java Enterprise",
					mark: 23
				}]
		},
		{
			name: "Emily Smith",
			age: 30,
			img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
			role: "admin",
			courses: [
				{
					title: "Front-end Pro",
					score: 10,
					lector: "Leo Smith"
				},
				{
					title: "Java Enterprise",
					score: 50,
					lector: "David Smith"
				},
				{
					title: "QA",
					score: 75,
					lector: "Emilie Smith"
				}]
		},
		{
			name: "Leo Smith",
			age: 253,
			img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
			role: "lector",
			courses: [
				{
					title: "Front-end Pro",
					score: 78,
					studentsScore: 79
				},
				{
					title: "Java Enterprise",
					score: 85,
					studentsScore: 85
				}
			]
		}
	]
}

class Users {

	getUsers() {

		let users = this.users;

		let arrUsers = users.map((elem) => {
			let imgUser;
			for (let item in ALL_USERS.roles) {
				if (elem.role == item) {
					imgUser = ALL_USERS.roles[item];
				}
			}

			let coursesArr = [];

			if (elem.courses) {
				coursesArr = elem.courses.map((item) => {

					function markGrade(mark) {
						let arrGrad = ALL_USERS.gradation;
						if (mark > arrGrad[0][0] && mark <= arrGrad[0][1]) {
							return `<span class="mark" style="background:#ffe4c4; color:#ff4500;">${GRADATION_TEXT[0]}</span>`;
						} else if (mark > arrGrad[1][0] && mark <= arrGrad[1][1]) {
							return `<span class="mark" style="background:#00bfff; color:#0000cd;">${GRADATION_TEXT[1]}</span>`;
						} else if (mark > arrGrad[2][0] && mark <= arrGrad[2][1]) {
							return `<span class="mark" style="background:#87ceeb; color:#4b0082;">${GRADATION_TEXT[2]}</span>`;
						} else if (mark > arrGrad[3][0] && mark <= arrGrad[3][1]) {
							return `<span class="mark" style="background:#7cfc00; color:#008000;">${GRADATION_TEXT[3]}</span>`;
						}
					}

					return `<div class="inner_courses">
									<div>${item.title}:</div>
									<div>${markGrade(item.mark)}</div>
							</div>`
				});
				coursesArr = coursesArr.join('');
			}

			return `<section>
						<div class="inner_first">
							<div><div class="inner_img"><img src="${elem.img}">
							<div><p>Name: <b>${elem.name}</b></p><p>Age: <b>${elem.age}</b></p></div></div></div>
							<div class="inner_second lightblue"><img src="${imgUser}"><p class="caps">${elem.role}</p></div>
						</div>
						<div class="inner_courses_wrap">${coursesArr}</div>
					</section>`;
		});
		return arrUsers.join('');
	}
}

class Student extends Users { };

class Admin extends Users {
	getUsers() {

		let users = this.users;

		let arrUsers = users.map((elem) => {
			let imgUser;
			for (let item in ALL_USERS.roles) {
				if (elem.role == item) {
					imgUser = ALL_USERS.roles[item];
				}
			}

			let coursesArr = [];

			if (elem.courses) {
				coursesArr = elem.courses.map((item) => {

					function markGrade(mark) {
						let arrGrad = ALL_USERS.gradation;
						if (mark > arrGrad[0][0] && mark <= arrGrad[0][1]) {
							return `<span class="mark" style="background:#ffe4c4; color:#ff4500;">${GRADATION_TEXT[0]}</span>`;
						} else if (mark > arrGrad[1][0] && mark <= arrGrad[1][1]) {
							return `<span class="mark" style="background:#00bfff; color:#0000cd;">${GRADATION_TEXT[1]}</span>`;
						} else if (mark > arrGrad[2][0] && mark <= arrGrad[2][1]) {
							return `<span class="mark" style="background:#87ceeb; color:#4b0082;">${GRADATION_TEXT[2]}</span>`;
						} else if (mark > arrGrad[3][0] && mark <= arrGrad[3][1]) {
							return `<span class="mark" style="background:#7cfc00; color:#008000;">${GRADATION_TEXT[3]}</span>`;
						}
					}

					return `	<div class="inner__courses_admin">
										<div class="class="inner__courses_admin_marg">Title: <b>${item.title}</b></div>
										<div class="class="inner__courses_admin_marg">Admin's score:${markGrade(item.score)}</div>
										<div class="class="inner__courses_admin_marg">Lector: <b>${item.lector}</b></div>
								</div>`
				});
				coursesArr = coursesArr.join('');
			}

			return `<section>
							<div class="inner_first">
								<div><div class="inner_img"><img src="${elem.img}">
								<div><p>Name: <b>${elem.name}</b></p><p>Age: <b>${elem.age}</b></p></div></div></div>
								<div class="inner_second middleblue"><img src="${imgUser}"><p class="caps">${elem.role}</p></div>
							</div>
							<div class="inner_courses_secwrap">${coursesArr}</div>
						</section>`;
		});
		return arrUsers.join('');
	}
};

class Lector extends Users {

	getUsers() {

		let users = this.users;

		let arrUsers = users.map((elem) => {
			let imgUser;
			for (let item in ALL_USERS.roles) {
				if (elem.role == item) {
					imgUser = ALL_USERS.roles[item];
				}
			}

			let coursesArr = [];

			if (elem.courses) {
				coursesArr = elem.courses.map((item) => {

					function markGrade(mark) {
						let arrGrad = ALL_USERS.gradation;
						if (mark > arrGrad[0][0] && mark <= arrGrad[0][1]) {
							return `<span class="mark" style="background:#ffe4c4; color:#ff4500;">${GRADATION_TEXT[0]}</span>`;
						} else if (mark > arrGrad[1][0] && mark <= arrGrad[1][1]) {
							return `<span class="mark" style="background:#00bfff; color:#0000cd;">${GRADATION_TEXT[1]}</span>`;
						} else if (mark > arrGrad[2][0] && mark <= arrGrad[2][1]) {
							return `<span class="mark" style="background:#87ceeb; color:#4b0082;">${GRADATION_TEXT[2]}</span>`;
						} else if (mark > arrGrad[3][0] && mark <= arrGrad[3][1]) {
							return `<span class="mark" style="background:#7cfc00; color:#008000;">${GRADATION_TEXT[3]}</span>`;
						}
					}

					return `	<div class="inner__courses_lector">
									<div>Title: <b>${item.title}</b></div>
									<div>Lector's score: <span>${markGrade(item.score)}</span></div>
									<div>Average student's score:${markGrade(item.studentsScore)}</div>
								</div>`
				});
				coursesArr = coursesArr.join('');
			}

			return `<section>
							<div class="inner_first">
								<div><div class="inner_img"><img src="${elem.img}">
								<div><p>Name: <b>${elem.name}</b></p><p>Age: <b>${elem.age}</b></p></div></div></div>
								<div class="inner_second lightrose"><img src="${imgUser}"><p class="caps">${elem.role}</p></div>
							</div>
						<div class="inner_courses_lector">${coursesArr}</div>
					</section>`;
		});
		return arrUsers.join('');
	}
};

function makeUserObj(user) {
	let newObj = {};
	for (let key in ALL_USERS) {
		if (key == "users") {
			let newArr = ALL_USERS[key].filter((elem) => elem.role == `${user}`);
			newObj[key] = newArr;
		} else {
			newObj[key] = ALL_USERS[key];
		}
	}
	return newObj;
}

const USER_STUDENT = makeUserObj("student");
const USER_ADMIN = makeUserObj("admin");
const USER_LECTOR = makeUserObj("lector")

function assignUserClass(classUser, user) {
	let assingUser = Object.assign(classUser, user);
	return assingUser;
}

let protoStudent = assignUserClass(new Student(), USER_STUDENT);
let protoAdmin = assignUserClass(new Admin(), USER_ADMIN);
let protoLector = assignUserClass(new Lector(), USER_LECTOR);

function sumUsersRender(...args) {
	return args.reduce((sum, arg) => sum + arg);
}

WRAPPER.innerHTML = sumUsersRender(protoStudent.getUsers(), protoAdmin.getUsers(), protoLector.getUsers());


