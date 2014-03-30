  
  function getCard(target)
  { 
    var uniqueCard = false;
    
    while (!uniqueCard)
    {
      uniqueCard = true;
      var draw = Math.floor(Math.random() * 52) + 1;
   
    for (var i = 0; i < dealtCards.length; i++)
    {
      if (draw == dealtCards[i].index)
        uniqueCard = false;
    } // end for loop checking of unique card
   
    } // end while loop checking for unique card
    var card = new Object();
   	card.index = draw;
  
  	switch(draw)
    {
      case 1: 
        card.value = 2;
        card.name = "2 of clubs";
        card.imgsrc = "https://lh5.googleusercontent.com/-y3aS1YHvmxg/TXC0BIiVNzI/AAAAAAAADlU/Fz8Q8N-37go/s2048-d/2_of_clubs.jpg";
        break;
        
      case 2:
        card.value = 2;
        card.name = "2 of diamonds";
        card.imgsrc = "https://lh4.googleusercontent.com/-WeLSpnK33Q4/TXC0FiBkFMI/AAAAAAAADmM/PirFzKeANlk/s2048-d/2_of_diamonds.jpg";
        break;
        
      case 3:
        card.value = 2;
        card.name = "2 of spades";
        card.imgsrc = "https://lh3.googleusercontent.com/-_5BTUtEpRNY/TXCz0BxYwyI/AAAAAAAADjc/2KAIH5oZ79s/s2048-d/2_of_spades.jpg";
        break;
        
      case 4: 
        card.value = 2;
        card.name = "2 of hearts";
        card.imgsrc = "https://lh5.googleusercontent.com/-kZr43eark4o/TXCz9ZDsqRI/AAAAAAAADkg/UBREC0B1UO0/s2048-d/2_of_hearts.jpg";
        break;
        
      case 5:
        card.value = 3;
        card.name = "3 of clubs";
        card.imgsrc = "https://lh6.googleusercontent.com/-L-FwCfFqcBQ/TXC0BZdkk4I/AAAAAAAADlY/3yz3gqqly2U/s2048-d/3_of_clubs.jpg";
        break;
        
      case 6: 
        card.value = 3;
        card.name = "3 of diamonds";
        card.imgsrc = "https://lh6.googleusercontent.com/-rMNIvaeryys/TXC0F9w2izI/AAAAAAAADmQ/UQO-rq-zG9Y/s2048-d/3_of_diamonds.jpg";
        break;
        
      case 7:
        card.value = 3;
        card.name = "3 of spades";
        card.imgsrc = "https://lh5.googleusercontent.com/-LTYf7Td-l3s/TXCz0zYDChI/AAAAAAAADjg/HVdRsLioaUQ/s2048-d/3_of_spades.jpg";
        break;
        
      case 8:
        card.value = 3;
        card.name = "3 of hearts";
        card.imgsrc = "https://lh5.googleusercontent.com/-hMng1rYWH3U/TXCz94e4hVI/AAAAAAAADkk/-tWjCusYNRU/s2048-d/3_of_hearts.jpg";
        break;
       
      case 9:
        card.value = 4;
        card.name = "4 of clubs";
        card.imgsrc = "https://lh6.googleusercontent.com/-Mi-VC_ArgaM/TXC0Bzar6lI/AAAAAAAADlc/vcHlJXpMTQw/s2048-d/4_of_clubs.jpg";
        break;
     
      case 10:
        card.value = 4;
        card.name = "4 of diamonds";
        card.imgsrc = "https://lh3.googleusercontent.com/-eydz7tbeJPo/TXC0GSEUd6I/AAAAAAAADmU/D7U_AjMTVTY/s2048-d/4_of_diamonds.jpg";
        break;
        
      case 11:
        card.value = 4;
        card.name = "4 of spades";
        card.imgsrc = "https://lh5.googleusercontent.com/-u-qQVkPKAvk/TXCz1uOUdOI/AAAAAAAADjk/ZptyfOFX1Ck/s2048-d/4_of_spades.jpg";
        break;
        
      case 12:
        card.value = 4;
        card.name = "4 of hearts";
        card.imgsrc = "https://lh6.googleusercontent.com/-h5gjBgj7gBE/TXCz-AqoumI/AAAAAAAADko/l_OZM_dAezY/s2048-d/4_of_hearts.jpg";
        break;
        
      case 13:
        card.value = 5;
        card.name = "5 of clubs";
        card.imgsrc = "https://lh6.googleusercontent.com/-wXvCbTuXdZM/TXC0Ca-kFfI/AAAAAAAADlg/ZeM1bzRzGsY/s2048-d/5_of_clubs.jpg";
        break;
        
      case 14:
        card.value = 5;
        card.name = "5 of diamonds";
        card.imgsrc = "https://lh5.googleusercontent.com/-_N1sd5hiDjE/TXC0GtqXgbI/AAAAAAAADmY/Yj8xMQxcTi4/s2048-d/5_of_diamonds.jpg";
        break;
        
      case 15:
        card.value = 5;
        card.name = "5 of spades";
        card.imgsrc = "https://lh5.googleusercontent.com/-VhiZgMjBz18/TXCz3BYsoiI/AAAAAAAADjo/ZX_mhUSyY_M/s2048-d/5_of_spades.jpg";
        break;
        
      case 16:
        card.value = 5;
        card.name = "5 of hearts";
        card.imgsrc = "https://lh4.googleusercontent.com/-VFknJRiUSxs/TXCz-Q7UhUI/AAAAAAAADks/13NoFbWvz0w/s2048-d/5_of_hearts.jpg";
        break;
        
      case 17:
        card.value = 6;
        card.name = "6 of clubs";
        card.imgsrc = "https://lh4.googleusercontent.com/-jaTUZq9UdIc/TXC0Ckq0rfI/AAAAAAAADlk/6aBKULq1_d0/s2048-d/6_of_clubs.jpg";
        break;
        
      case 18:
        card.value = 6;
        card.name = "6 of diamonds";
        card.imgsrc = "https://lh6.googleusercontent.com/-VGjMufCoKsA/TXC0GycloYI/AAAAAAAADmc/GH3PLGKI6lo/s2048-d/6_of_diamonds.jpg";
        break;
        
      case 19:
        card.value = 6;
        card.name = "6 of spades";
        card.imgsrc = "https://lh5.googleusercontent.com/-c-nln7HLY74/TXCz4D3IdbI/AAAAAAAADjs/SWW1prLCfMU/s2048-d/6_of_spades.jpg";
        break;
        
      case 20:
        card.value = 6;
        card.name = "6 of hearts";
        card.imgsrc = "https://lh4.googleusercontent.com/-cHNV0z_2HR4/TXCz-obkYzI/AAAAAAAADkw/JFdNuOx-G34/s2048-d/6_of_hearts.jpg";
        break;
        
      case 21:
        card.value = 7;
        card.name = "7 of clubs";
        card.imgsrc = "https://lh4.googleusercontent.com/-5zl_tjOLh2Q/TXC0C1NQ_LI/AAAAAAAADlo/hP63XqK4rbI/s2048-d/7_of_clubs.jpg";
        break;
        
      case 22:
        card.value = 7;
        card.name = "7 of diamonds";
        card.imgsrc = "https://lh3.googleusercontent.com/-Gy-vKYuvo-Q/TXC0HKX1ukI/AAAAAAAADmg/Zp_l5SEyjMk/s2048-d/7_of_diamonds.jpg";
        break;
        
      case 23:
        card.value = 7;
        card.name = "7 of spades";
        card.imgsrc = "https://lh4.googleusercontent.com/-v5bv8moMJ0s/TXCz499Ug3I/AAAAAAAADjw/lMi39xGcuAQ/s2048-d/7_of_spades.jpg";
        break;
        
      case 24:
        card.value = 7;
        card.name = "7 of hearts";
        card.imgsrc = "https://lh5.googleusercontent.com/-wnDqTQp-7_8/TXCz-4h4eCI/AAAAAAAADk0/94CrhfaKVaw/s2048-d/7_of_hearts.jpg";
        break;
        
      case 25:
        card.value = 8;
        card.name = "8 of clubs";
        card.imgsrc = "https://lh4.googleusercontent.com/-4YBFMnZnpfM/TXC0DQjhGLI/AAAAAAAADls/op_wHjihdRE/s2048-d/8_of_clubs.jpg";
        break;
        
      case 26:
        card.value = 8;
        card.name = "8 of diamonds";
        card.imgsrc = "https://lh3.googleusercontent.com/-AZFOGwAjMc0/TXC0HmPhusI/AAAAAAAADmk/L4SQVCzb6EQ/s2048-d/8_of_diamonds.jpg";
        break;
        
      case 27:
        card.value = 8;
        card.name = "8 of spades";
        card.imgsrc = "https://lh5.googleusercontent.com/-v8r3z9a7wf8/TXCz5299c2I/AAAAAAAADj0/dB9eqMCr-48/s2048-d/8_of_spades.jpg";
        break;
        
      case 28:
        card.value = 8;
        card.name = "8 of hearts";
        card.imgsrc = "https://lh3.googleusercontent.com/-CgLYkTtPH8o/TXCz_Z6woTI/AAAAAAAADk4/x4tf_q_CmXA/s2048-d/8_of_hearts.jpg";
        break;
        
      case 29:
        card.value = 9;
        card.name = "9 of clubs";
        card.imgsrc = "https://lh6.googleusercontent.com/-5_pigBzf_zU/TXC0D_rvstI/AAAAAAAADl0/boL_ac1HJPM/s2048-d/9_of_clubs.jpg";
        break;
        
      case 30:
        card.value = 9;
        card.name = "9 of diamonds";
        card.imgsrc = "https://lh4.googleusercontent.com/-w0yapAcWY00/TXC0Hy2v6MI/AAAAAAAADmo/Z4k0YgH51Kk/s2048-d/9_of_diamonds.jpg";
        break;
        
      case 31:
        card.value = 9;
        card.name = "9 of spades";
        card.imgsrc = "https://lh6.googleusercontent.com/-jQPh0aLrrQo/TXCz6sTJyuI/AAAAAAAADj4/c8jVT0j-ZPg/s2048-d/9_of_spades.jpg";
        break;
        
      case 32:
        card.value = 9;
        card.name = "9 of hearts";
        card.imgsrc = "https://lh6.googleusercontent.com/-cyM6xjEFug8/TXCz_j7XGaI/AAAAAAAADk8/daJscAEr6ro/s2048-d/9_of_hearts.jpg";
        break;
        
      case 33:
        card.value = 10;
        card.name = "10 of clubs";
        card.imgsrc = "https://lh6.googleusercontent.com/-gIzPBvKbnyM/TXC0EGp3wjI/AAAAAAAADl4/aw0ZJD-sYhs/s2048-d/10_of_clubs.jpg";
        break;
        
      case 34:
        card.value = 10;
        card.name = "10 of diamonds";
        card.imgsrc = "https://lh3.googleusercontent.com/-pdoSjGwP6Xs/TXC0IIN2VzI/AAAAAAAADms/rjVaiEp0K3s/s2048-d/10_of_diamonds.jpg";
        break;
        
      case 35:
        card.value = 10;
        card.name = "10 of spades";
        card.imgsrc = "https://lh3.googleusercontent.com/-DYwKVEyAFgo/TXCz7FqQG_I/AAAAAAAADj8/Mg3trHpjPB4/s2048-d/10_of_spades.jpg";
        break;
        
      case 36:
        card.value = 10;
        card.name = "10 of hearts";
        card.imgsrc = "https://lh6.googleusercontent.com/-2fJcMxXrdpU/TXC0ADmdQ-I/AAAAAAAADlA/ScWeaJntQDE/s2048-d/10_of_hearts.jpg";
        break;
        
      case 37:
        card.value = 10;
        card.name = "jack of clubs";
        card.imgsrc = "https://lh5.googleusercontent.com/-GcGg67DcStA/TXaNMo6UPHI/AAAAAAAADoE/9D0yOiKyGDo/s2048-d/jack_of_clubs2.jpg";
        break;
        
      case 38:
        card.value = 10;
        card.name = "jack of diamonds";
        card.imgsrc = "https://lh5.googleusercontent.com/-B-1F7-IVdSw/TXaNNa5RuiI/AAAAAAAADoI/RAkJKOsr2Fs/s2048-d/jack_of_diamonds2.jpg";
        break;
        
      case 39:
        card.value = 10;
        card.name = "jack of spades";
        card.imgsrc = "https://lh3.googleusercontent.com/-DTreFSNvfto/TXaNKswnu3I/AAAAAAAADn8/cgz9B-HR5KQ/s2048-d/jack_of_spades2.jpg";
        break;
        
      case 40:
        card.value = 10;
        card.name = "jack of hearts";
        card.imgsrc = "https://lh4.googleusercontent.com/-7l2LzpqpkoQ/TXaNMJAHHSI/AAAAAAAADoA/D1LBqsHzS-0/s2048-d/jack_of_hearts2.jpg";
        break;
        
      case 41:
        card.value = 10;
        card.name = "queen of clubs";
        card.imgsrc = "https://lh4.googleusercontent.com/-7B4U4P6hSgI/TXaNO9KOXQI/AAAAAAAADoU/KBt64UnYRa8/s2048-d/queen_of_clubs2.jpg";
        break;
        
      case 42:
        card.value = 10;
        card.name = "queen of diamonds";
        card.imgsrc = "https://lh5.googleusercontent.com/-T7QwPOa05hM/TXaNPVIdOgI/AAAAAAAADoY/B8AfPHiNoXo/s2048-d/queen_of_diamonds2.jpg";
        break;
        
      case 43:
        card.value = 10;
        card.name = "queen of spades";
        card.imgsrc = "https://lh4.googleusercontent.com/-gye2N40dqMk/TXaNN6IXwgI/AAAAAAAADoM/AfUSdu9Nl1E/s2048-d/queen_of_spades2.jpg";
        break;
        
      case 44:
        card.value = 10;
        card.name = "queen of hearts";
        card.imgsrc = "https://lh4.googleusercontent.com/-zSDh8RbqWUw/TXaNOaGgU4I/AAAAAAAADoQ/PenIP3iD4Qk/s2048-d/queen_of_hearts2.jpg";
        break;
        
      case 45:
        card.value = 10;
        card.name = "king of clubs";
        card.imgsrc = "https://lh4.googleusercontent.com/-sxlEkxffd2M/TXaNQ6nUg0I/AAAAAAAADok/7Gf0T3nRmQg/s2048-d/king_of_clubs2.jpg";
        break;
        
      case 46:
        card.value = 10;
        card.name = "king of diamonds";
        card.imgsrc = "https://lh4.googleusercontent.com/-W6X_3kFWROg/TXaNRQUW4mI/AAAAAAAADoo/l5lAKXuT0gM/s2048-d/king_of_diamonds2.jpg";
        break;
        
      case 47:
        card.value = 10;
        card.name = "king of spades";
        card.imgsrc = "https://lh4.googleusercontent.com/-dZwBwX6RDF8/TXaNPy1xj1I/AAAAAAAADoc/g2F-WLIlpSA/s2048-d/king_of_spades2.jpg";
        break;
        
      case 48:
        card.value = 10;
        card.name = "king of hearts";
        card.imgsrc = "https://lh4.googleusercontent.com/-E8gN0Z01VnQ/TXaNQf_SuSI/AAAAAAAADog/KwiZ1sgR448/s2048-d/king_of_hearts2.jpg";
        break;
        
      case 49:
        if (target == "me")
        {
          if (myScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        else
        {
          if (dealerScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        card.name = "ace of clubs";
        card.imgsrc = "https://lh4.googleusercontent.com/-5z9_ul2COnM/TXC0BO_T-YI/AAAAAAAADlQ/xXO0B2r5vTg/s2048-d/ace_of_clubs.jpg";
        break;
        
      case 50:
        if (target == "me")
        {
          if (myScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        else
        {
          if (dealerScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        card.name = "ace of diamonds";
        card.imgsrc = "https://lh3.googleusercontent.com/-pR3kP4MzVAA/TXC0Fc-P4YI/AAAAAAAADmI/buxnUUArqIs/s2048-d/ace_of_diamonds.jpg";
        break;
        
      case 51:
        if (target == "me")
        {
          if (myScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        else
        {
          if (dealerScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        card.name = "ace of spades";
        card.imgsrc = "https://lh3.googleusercontent.com/-WouDRILpHk8/TXaNJLhzQ_I/AAAAAAAADn4/Ll4jlea-x2c/s2048-d/ace_of_spades2.jpg";
        break;
        
      case 52:
        if (target == "me")
        {
          if (myScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        else
        {
          if (dealerScore > 10)
            card.value = 1;
          else
            card.value = 11;
        }
        
        card.name = "ace of hearts";
        card.imgsrc = "https://lh4.googleusercontent.com/-19oLnSirf4k/TXCz8-IxH8I/AAAAAAAADkc/7oSU5tZsv24/s2048-d/ace_of_hearts.jpg";
        break;
        
        
      default: 
        document.display.myCards.value = "Error code 1";
       
    } // end switch(card.index)
  		
  	dealtCards.push(card);
  	
    return;
  } // end getCard()


  function displayCard(target)
  {
    var out;
    
    if(target == "me")
    {
      out = "#me";
    
    document.display.myCards.value = dealtCards[dealtCards.length - 1].name;
    } // end if me
    
    else if (target == "dealer")
    {
      out = "#dealer";
      
      document.display.dealersCards.value = dealtCards[dealtCards.length - 1].name;
    } // end if dealer 
    
    var img = new Image();
    var url = dealtCards[dealtCards.length - 1].imgsrc;
    img.src = url;
    
    $(out).append(img);
    
    
        
    return;
  } // end displayCard()
     

  function updateScore(target)
  {
    if (target == "me")
    {
    
    myScore += dealtCards[dealtCards.length - 1].value;
    
    document.display.myScore.value = myScore;
      
      if (myScore > 21)
      {
        document.display.myCards.value = "Busted!";
        myTurnOver = true;
        busted = true;
        determineWinner();
      }
        
    } // end if me
    
    else if(target == "dealer")
    {
      dealerScore += dealtCards[dealtCards.length - 1].value;
      document.display.dealerScore.value = dealerScore;
    } // end if dealertarget
    
    else
      alert("Error code 3.");
	return;
  }

  function hit()
  {
  	if (!myTurnOver)
    {
    
    roundOver = false;
    getCard("me");
    displayCard("me");
    updateScore("me");
      
    } // end if
    
    else
      alert("Your turn is over!");
  } // end hit()

  function deal()
  {
    if (roundOver)
    {
      resetGame();
      hit();
    }
    
    else
      alert("Round still in play!");
    
    return;
  } // end deal
