// fetch를 통해서 되돌려 받은 주문리스트를 왼쪽의 주문리스트에 표시하기
const add_order_list = (menu_list) => {
	const order_box = document.querySelector('article.order_list')

	// 리스트가 중복되어 표시되는 것을 방지하기 위하여
	// 기존에 div.order_list가 있는지 확인하고 
	// div.order_list를 가져와서, 전체를 article.order_list로부터 삭제하기
	// order_list는 Array형
	let order_list = document.querySelectorAll('div.order_list') 
	if(order_list) {
		order_list.forEach(order_tag =>{
			order_box.removeChild(order_tag)
		})
	}

	const orders = menu_list.map((menu, index) => {
		order_list = document.createElement('div')
		order_list.classList.add('order_list')

		// div.menu_id tag를 만들어라
		const menu_id = document.createElement('div')
		menu_id.classList.add('menu_id')
		menu_id.innerText = menu.to_pcode

		const menu_name = document.createElement('div')
		menu_name.classList.add('menu_name')
		// menu_name.innerText = menu.p_name

		const menu_qty = document.createElement('div')
		menu_qty.classList.add('menu_qty')
		menu_qty.innerText = menu.to_qty

		const menu_price = document.createElement('div')
		menu_price.classList.add('menu_price')
		menu_price.innerText = menu.to_qty

		order_list.appendChild(menu_id)
		order_list.appendChild(menu_name)
		order_list.appendChild(menu_price)
		order_list.appendChild(menu_qty)
		return order_list
		// order_box.appendChild(order_list)
	})
	order_box.append(...orders)
}

// fetch를 사용하여 서버에 데이터를 요청하기 위해 별도의
// 함수를 선언하기
const order_input = (table_id, menu_id) => {

	// path Variable 방식으로 menu_id 값을 url에 포함하여 
	// getter 요청하기 
	/**
	 * 만약 3번 테이블에 5번 메뉴를 추가하려고 Request를 한다면
	 * localhost:3000/order/3/input/5 과 같은 URL을 만들어 서버로 Request 한다
	 * 이런식으로 만드는 URL 방식을 RESTful 요청이라고 한다
	 */
	fetch(`/pos/order/${table_id}/input/${menu_id}`)
	.then((res) => res.json()) // json 형식으로 응답
	.then((result) => {
		console.log(result) // 결과를 console로 출력
		add_order_list(result.order_list) // add_order_list에 result 결과 전달 
	})
}

// DOMContentLoaded event를 설정하면
// js 코드가 HTML의 어떤 부분에 있어도 상관없이 작동이 된다
document.addEventListener("DOMContentLoaded", () => {

	// 현재 화면이 열리면(주문화면이 열리면)
	// table_id 값을 추출하기 위하여
	// article.order_list에서 dataset을 추출하여 변수에 담기
	const product_article = document.querySelector("article.product_list")
	const order_article = document.querySelector("article.order_list")
	const table_id = order_article.dataset.table_id
	

	if(product_article) {
		
		product_article.addEventListener("click", (e) => {
			const target = e.target;

			// index.pug의 table layout click 설정
			if(target.tagName === "DIV" && target.className.includes("menu")){

				const menu_id = target.dataset.menu_id
				// alert(menu_id)
				// document.location.href = `/pos/order/input/${menu_id}`

				// fetch 전송을 위한 함수 호출
				order_input(table_id, menu_id)
			}
		})
	}
	fetch(`/pos/getorder/${table_id}`)
	.then((res) => res.json())
	.then((result) => add_order_list(result))


})