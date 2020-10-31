
function toucanDirective() {
  'ngInject';

  return {
    restrict: 'EA',
    scope: {
    	scale : '=',
    },
    link: linkFn,
    template: `
    <style>
		toucan {
		  position: relative;
		  width: 135px;
		  height: 100px;
		  display: inline-block;
		  transform: scale({{scale}});
		}
		toucan:hover .c {
		  transform: rotate(20deg);
		  top: 30px;
		  margin-left: -5px;
		}
		toucan:hover .o::after {
		  top: 8px;
		  left: 8px;
		}
		toucan .t {
		  position: absolute;
		  left: 35px;
		  z-index: 4;
		  width: 45px;
		  height: 72px;
		  display: block;
		  background: #333;
		  border-radius: 35px 0 30px 0;
		}
		toucan .t::after {
		  position: absolute;
		  top: 0;
		  right: 0;
		  width: 23px;
		  height: 42px;
		  display: block;
		  background: #FCBB42;
		  border-radius: 50px 0 0 50px;
		  content: "";
		}
		toucan .o {
		  position: absolute;
		  z-index: 5;
		  top: 10px;
		  left: 50px;
		  width: 25px;
		  height: 25px;
		  display: block;
		  border-radius: 50%;
		  background: white;
		}
		toucan .o::after {
		  transition: all 0.3s;
		  animation: wink 3s infinite;
		  position: absolute;
		  top: 5px;
		  left: 5px;
		  width: 16px;
		  height: 16px;
		  display: block;
		  background: #333;
		  border-radius: 50%;
		  content: "";
		}
		toucan .u {
		  position: absolute;
		  z-index: 2;
		  top: 0;
		  left: 80px;
		  width: 60px;
		  height: 20px;
		  display: block;
		  background: #967ADC;
		  border-radius: 0 40px 0 0;
		}
		toucan .u::after, toucan .u::before {
		  position: absolute;
		  width: 20px;
		  height: 100%;
		  display: block;
		  content: "";
		}
		toucan .u::before {
		  left: 0;
		  background: #E9573F;
		}
		toucan .u::after {
		  left: 20px;
		  background: #4FC1E9;
		}
		toucan .c {
		  transition: all 0.3s, left 0.4s;
		  position: absolute;
		  left: 80px;
		  top: 20px;
		  z-index: 3;
		  width: 60px;
		  height: 9px;
		  display: block;
		  background: #7652d1;
		}
		toucan .c::after, toucan .c::before {
		  position: absolute;
		  width: 20px;
		  height: 100%;
		  display: block;
		  content: "";
		}
		toucan .c::before {
		  left: 0;
		  background: #dc3519;
		}
		toucan .c::after {
		  left: 20px;
		  background: #22b1e3;
		}
		toucan .a {
		  transform: rotate(-65deg);
		  position: absolute;
		  top: 8px;
		  left: 10px;
		  width: 35px;
		  height: 70px;
		  display: block;
		  background: #333;
		  border-radius: 200px 0 0 200px;
		}
		toucan .n {
		  transform: rotate(21deg);
		  position: absolute;
		  top: 35px;
		  left: 30px;
		  display: block;
		  border: 14px solid transparent;
		  border-bottom: 40px solid #333;
		}

		@keyframes wink {
		  0%, 20%, 50%, 80%, 100% {
		    transform: rotateX(0);
		  }
		  38% {
		    transform: rotateX(180deg);
		  }
		}

    </style>

	  <div class="t"></div>
	  <div class="o"></div>
	  <div class="u"></div>
	  <div class="c"></div>
	  <div class="a"></div>
	  <div class="n"></div>
    `
  };

  function linkFn(scope, elem, attrs, fn) {

  }
}

export default toucanDirective;
