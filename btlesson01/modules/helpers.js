/*
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
arrA = [1, 5, 3, 8, 10];
function tinhTrungBinh(arr){
    let sum  = 0;
    for (let i = 0; i < arr.length; i++)
    sum += arr[i];
}
