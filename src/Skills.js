function Skills(){
    // var TxtType = function(el, toRotate, period) {
    //     this.toRotate = toRotate;
    //     this.el = el;
    //     this.loopNum = 0;
    //     this.period = parseInt(period, 10) || 2000;
    //     this.txt = '';
    //     this.tick();
    //     this.isDeleting = false;
    // };
    //
    // TxtType.prototype.tick = function() {
    //     var i = this.loopNum % this.toRotate.length;
    //     var fullTxt = this.toRotate[i];
    //
    //     if (this.isDeleting) {
    //         this.txt = fullTxt.substring(0, this.txt.length - 1);
    //     } else {
    //         this.txt = fullTxt.substring(0, this.txt.length + 1);
    //     }
    //
    //     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    //
    //     var that = this;
    //     var delta = 200 - Math.random() * 100;
    //
    //     if (this.isDeleting) { delta /= 2; }
    //
    //     if (!this.isDeleting && this.txt === fullTxt) {
    //         delta = this.period;
    //         this.isDeleting = true;
    //     } else if (this.isDeleting && this.txt === '') {
    //         this.isDeleting = false;
    //         this.loopNum++;
    //         delta = 500;
    //     }
    //
    //     setTimeout(function() {
    //         that.tick();
    //     }, delta);
    // };
    //
    // window.onload = function() {
    //     var elements = document.getElementsByClassName('typewrite');
    //     for (var i=0; i<elements.length; i++) {
    //         var toRotate = elements[i].getAttribute('data-type');
    //         var period = elements[i].getAttribute('data-period');
    //         if (toRotate) {
    //             new TxtType(elements[i], JSON.parse(toRotate), period);
    //         }
    //     }
    //     // INJECT CSS
    //     var css = document.createElement("style");
    //     css.type = "text/css";
    //     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    //     document.body.appendChild(css);
    // };
    return(
        <div>
            <ul>
                <li className="anim-typewriter"><h2>Programing Skills</h2></li>
                <li className="anim-typewriter"><h3>Python</h3></li>
                <li className="anim-typewriter"><h3>C++</h3></li>
                <li className="anim-typewriter"><h3>JavaScript</h3></li>
                <li className="anim-typewriter"><h3>SQL</h3></li>
                <li className="anim-typewriter"><h3>ReactJS</h3></li>
                <li className="anim-typewriter"><h3>Bash</h3></li>
                <li className="anim-typewriter"><h2>IT Skills</h2></li>
                <li className="anim-typewriter"><h3>Microsoft Virtual Machine Management</h3></li>
                <li className="anim-typewriter"><h3>AppsAnywhere software Packaging</h3></li>
                <li className="anim-typewriter"><h2>Personal Skills</h2></li>
                <li className="anim-typewriter"><h3>Leadership</h3></li>
                <li className="anim-typewriter"><h3>Communication</h3></li>
                <li className="anim-typewriter"><h3>Creativity</h3></li>
                <li className="anim-typewriter"><h3>bilingual : Farsi and English</h3></li>


            </ul>
        </div>
    )
}

export default Skills;