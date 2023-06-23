/*
Tạo 1 thư mục với cấu trúc thư mục như sau:
	index.html
	main.js
	modules/
		helpers.js
*Bài 1-4 viết trong file main.js
*/

/*
Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. sử dụng filter()

arr1 = [1, 2, 4, 5, 6];
arr2 = [1, 6, 8, 9, 0];
const newArray = arr1.filter((Number) => {
    console.log(Number);
    return arr2.includes(Number);
})
console.log(newArray);

*/



/*
Bài 2: Map thao tác với từng phần tử trong mảng và xuất ra mảng mới
Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.

==>> array.map(callback(currentValue[, index[, array]])[, thisArg])
array: Mảng được áp dụng phương thức map().
callback: Hàm được gọi trên từng phần tử của mảng, nhận ba đối số:
currentValue: Giá trị của phần tử hiện tại trong mảng.
index (tùy chọn): Chỉ mục (index) của phần tử hiện tại trong mảng.
array (tùy chọn): Mảng được áp dụng phương thức map().
thisArg (tùy chọn): Giá trị được sử dụng làm this trong hàm callback.

*/
// arr = [1, 54, 6, 7];
// const newArr = arr.map((num) => {
//     return num + 5;
// });
// console.log(newArr);



/*
BT3:
Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96].
 Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
*/

m = [1,2,4,5,6,7]; 
n = [3,5,675,8,96];
function removeElements (m, n){
    const removeNumber = [1, 8, 10, 96, 7];
    const filterM = m.filter((num) => !removeNumber.includes(num));
        console.log(filterM);
    const filterN = n.filter((num) => !removeNumber.includes(num));
    return filterM.concat(filterN);
}



/*
Bài 4: Cho array 1 như sau: players = [
									{ id: 11, name: 'Messi', age: 33 },
									{ id: 12, name: 'Ronaldo', age: 34 },      
									{ id: 13, name: 'Young', age: 35 },        
									{ id: 14, name: 'Mane', age: 21 },          
									{ id: 15, name: 'Salah', age: 24 },
								]
Hãy chuyển đổi nó về array có dạng sau: playersModified = 
							{ 
								11: {id: 11, name: "Messi", age: 33},
								12: {id: 12, name: "Ronaldo", age: 34},
								13: {id: 13, name: "Young", age: 35},
								14: {id: 14, name: "Mane", age: 21},
								15: {id: 15, name: "Salah", age: 24}
							}.
		
*Các bài sau sẽ viết trong file helpers.js dưới dạng module và import trong file main.js để sử dụng
*/

const players = [
    { id: 11, name: 'Messi', age: 33 },
	{ id: 12, name: 'Ronaldo', age: 34 },      
	{ id: 13, name: 'Young', age: 35 },       
	{ id: 14, name: 'Mane', age: 21 },          
	{ id: 15, name: 'Salah', age: 24 },
]

const result = players.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
}, {});

console.log(result);



/*
BT5:
*Các bài sau sẽ viết trong filee helpers.js dưới dạng module và import trong file main.js để sử dụng
Bài 5: Cho mảng A = [1,5,3,8,10]
	+Viết chương trình JS tính giá trị trung bình của mảng.
	+Viêt chương trình JS để sắp xếp 1 mảng theo thứ tự giảm dần
		Input: A = [1,5,3,8,10]
		Output: A = [10, 8, 5, 3, 1]
	+Tính tổng các số dương trong mảng
	+Tính tổng các số lẻ trong mảng
	+Tìm số lớn thứ 2 trong mảng
		Output: 8
	+Đếm các số chính phương có trong mảng
*/

