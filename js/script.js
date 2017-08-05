function getTriangleArea (a, h) {

if ((a <= 0) || (h <= 0))
    return ('nieprawidłowe dane');

	return (a*h/2);
};

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(10,15),
triangle2Area = getTriangleArea(10,6),
triangle3Area = getTriangleArea(15,8);
