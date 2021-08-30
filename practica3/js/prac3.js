function mult (){
    var n1=parseFloat(document.getElementById('a').value);
    var n2=parseFloat(document.getElementById('b').value);
    var n3=parseFloat(document.getElementById('c').value);

    var res= n1*n2*n3;
    document.getElementById('m').value= res;
}

function temperatura(){
    var temp=document.getElementById('temperatura').value;
    if(temp>=-10 && temp<=15){
        var res="Frio";
        }
    else
        if (temp>=16 && temp<=25){
        res="Templado";}
        else
            if (temp>=26 && temp<=40){
            res="calor";
            }
            else 
            res="el valor no es valido";
        
    document.getElementById('r').value=res
}

function factorial (){
    var num1 =parseFloat(document.getElementById('num2').value);
    var fac = 1;
    for (var i=1;i<=num1;i++){
        fac = fac * i;
    }
    document.getElementById('res').value = fac;
}

function fecha(){
    var fecha = new Date();
    var dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

    var dia =dias[fecha.getDay()]
    var mes = meses[fecha.getMonth()]
    var year = fecha.getFullYear();
    var fechas= fecha.getDate();
    
   
    document.getElementById('fecha').value = dia
    document.getElementById('fecha1').value =fechas +', de'+ mes +' del ' + year
       
}