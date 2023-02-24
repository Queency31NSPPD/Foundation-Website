
      function Donate() {
        let name = prompt("What is your name");
        let email = prompt("What is your name address");
        let age = prompt("What is your age");
        if (age > 17) {
          alert("Thank you " + name + "!, We'll be in touch by email💌");
        } else {
          alert("Bye Bye!");
        }
      }
      let button = document.querySelector("button");
      button.addEventListener("click", Donate);