function Cal()
        {
            let fare=0;
            let discount=0;
            let total_fare=0;
            
            let from=document.getElementById("station from").value;
            let to=document.getElementById("station to").value;
            let type=document.getElementById("Payment Method").value;
            let count=Math.abs(to-from);

            
            if(count==0)
            {
                total_fare=10;
            }
            if(count<5) //1,2,3,4
            {
                fare+=10;
            }
            else if(count<9) //5,6,7,8
            {
                fare+=20;
            }
            else if(count<13) //9,10,11,12
            {
                fare+=30;
            }
            else if(count<17) //13,14,15,16
            {
                fare+=40;
            }
            else if(count<21)   //17,18,19,20
            {
                fare+=50;
            }
            else    //21,22,23,24
            {
                fare=60;
            }

            if(type==1)
            {
                discount=fare*(0.1);
                total_fare=fare-discount;
            }
            if(type==2)
            {
                total_fare=fare;
            }

            if(type==3 || from==27 || to==27)   //for edge cases-> if user doesn't select anything
            {
                total_fare=0;
            }
            // document.getElementById("ans").innerHTML=total_fare;
            document.getElementsByName("output")[0].value=total_fare;
        }