$('.pdt-owl').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.serv-owl').owlCarousel({
    loop:false,
    margin:200,
    nav:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

        /*Counter*/
        
        let btnAdd1 = document.querySelector('.add1');
        let btnAdd2 = document.querySelector('.add2');
        let btnAdd3 = document.querySelector('.add3');
        let btnAdd4 = document.querySelector('.add4');
        let btnAdd5 = document.querySelector('.add5');


        let btnSubtract1 = document.querySelector('.subtract1');
        let btnSubtract2 = document.querySelector('.subtract2');
        let btnSubtract3 = document.querySelector('.subtract3');
        let btnSubtract4 = document.querySelector('.subtract4');
        let btnSubtract5 = document.querySelector('.subtract5');


        let input1 = document.querySelector('.inp1');
        let input2 = document.querySelector('.inp2');
        let input3 = document.querySelector('.inp3');
        let input4 = document.querySelector('.inp4');
        let input5 = document.querySelector('.inp5');
    
        btnAdd1.addEventListener('click', () =>{
        input1.value = parseInt(input1.value) + 1;
        });

        btnAdd2.addEventListener('click', () =>{
        input2.value = parseInt(input2.value) + 1;
        });

        btnAdd3.addEventListener('click', () =>{
        input3.value = parseInt(input3.value) + 1;
        });

        btnAdd4.addEventListener('click', () =>{
        input4.value = parseInt(input4.value) + 1;
        });

        btnAdd5.addEventListener('click', () =>{
        input5.value = parseInt(input5.value) + 1;
        });


        btnSubtract1.addEventListener('click', () =>{
            if(input1.value>0)
                input1.value = parseInt(input1.value) - 1;
            else
                input1.value=0;
        });

        btnSubtract2.addEventListener('click', () =>{
            if(input2.value>0)
                input2.value = parseInt(input2.value) - 1;
            else
                input2.value=0;
        });

        btnSubtract3.addEventListener('click', () =>{
            if(input3.value>0)
                input3.value = parseInt(input3.value) - 1;
            else
                input3.value=0;
        });

        btnSubtract4.addEventListener('click', () =>{
            if(input4.value>0)
                input4.value = parseInt(input4.value) - 1;
            else
                input4.value=0;
        });

        btnSubtract5.addEventListener('click', () =>{
            if(input5.value>0)
                input5.value = parseInt(input5.value) - 1;
            else
                input5.value=0;
        });