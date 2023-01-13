var op = prompt("what do you want (circle,triangle,square,rectangle,parallelogram,trapezium,ellipse)");
var dim1,dim2,dim3;

        switch(op){
            case "circle":
                dim1=Number(prompt("Enter the reduis"));
                area=dim1*dim1*3.14;
    		alert(`The Area of circle : ${area}`);
            break;
            case "triangle":
                dim1=Number(prompt("Enter the height"));
                dim2=Number(prompt("Enter the base"));
                area=dim1*dim2*0.5;
    alert(`The Area of triangle  : ${area}`);

            break;
            case "square":
                dim1=Number(prompt("Enter the side"));
                area=dim1*dim1
    alert(`The Area of square : ${area}`);
            break;
		case "rectangle":
                        dim1=Number(prompt("Enter the length"));
                        dim2=Number(prompt("Enter the width"));
                        area=dim1*dim2;        
    alert(`The area of rectangle  : ${area}`); 
            break;
            case "parallelogram":
                dim1=Number(prompt("Enter the height"));
                dim2=Number(prompt("Enter the base"));
                area=dim1*dim2
    alert(`The area of parallelogram  : ${area}`); 
            break;
            case "trapezium":
                dim1=Number(prompt("Enter the first side"));
                        dim2=Number(prompt("Enter the second side"));
                        dim3=Number(prompt("Enter the height"));
                        area=(0.5*dim1*dim2)+dim3;
    alert(`The area of trapezium : ${area}`); 
            break;
            case "ellipse":
                dim1=Number(prompt("Enter the minor axis"));
                dim2=Number(prompt("Enter the major axis"));
                area=pi*0.5*0.5*dim1*dim2;
    alert(`The area of ellipse  : ${area}`); 
            break;


        }