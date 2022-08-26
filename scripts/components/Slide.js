class Slide {
  static activate(
    counter,
    timer,
    manualNav,
    imgArr,
    projectNumber,
    evenOrOdd,
    projectName,
    projectDescription,
    techStack,
    projectLink,
    githubLink,
    underlineShown = true
  ) {
    const projectIdName = `project${projectNumber}`;

    const projectsUnorderedList = document.getElementById("projects-ul");

    const slideWindow = `
                        <div class="project-slide-window project-slide-window--${evenOrOdd}">
                            <!-- slides start -->
                            <div class="project-slide-band">
                              <!-- radio inputs start -->
                              ${this.generateRadioInputs(projectIdName, imgArr)}
                              <!-- radio inputs end -->

                              <!-- slides start -->
                              ${this.generateSlides(imgArr, projectName)}
                              <!-- slides end -->

                              <!-- automatic navigation start  -->
                              ${this.generateAutoNavBtns(imgArr)}
                              <!-- automatic navigation end  -->
                            </div>
                            <!-- slides end -->

                            <!-- manual navigation start -->
                            ${this.generateManualNavLabels(
                              projectIdName,
                              imgArr
                            )}
                            <!-- manual navigation start -->
                        </div>
                        `;

    const projectInfo = `
                        <div class="project-introduction project-introduction--${evenOrOdd}">
                            <h2 class="project-name">${projectName}</h2>
                            <div class="vertical-flex-box project-specific-info">
                              <p class="project-description">
                                ${projectDescription}
                              </p>
                              <p class="techs-used">${techStack}</p>
                              <div class="flex-box project-buttons">
                                <a
                                  href=${projectLink}
                                  target="_blank"
                                  class="external-link"
                                >
                                  View project
                                </a>
                                <a
                                  href=${githubLink}
                                  target="_blank"
                                  class="external-link"
                                >
                                  Show code
                                </a>
                              </div>
                            </div>
                        </div>
                        `;

    const slide = `
                  <li
                    class="slide-section flex-box li-alignment-start project-li"
                  >
                      ${evenOrOdd === "odd" ? slideWindow : projectInfo}
                      ${evenOrOdd === "odd" ? projectInfo : slideWindow}
                  </li>
                  ${underlineShown ? "<hr />" : ""}
                  `;

    projectsUnorderedList.insertAdjacentHTML("beforeend", slide);

    this.activateSlideShow(counter, timer, manualNav, projectIdName, imgArr);
  }

  static generateRadioInputs(projectIdName, arr) {
    let radios = "";
    for (let i = 1; i <= arr.length; i++) {
      const radio = `<input 
                            type="radio" 
                            name="${projectIdName}-radio-btn" 
                            id="${projectIdName}-radio${i}" 
                    />`;
      radios += radio;
    }

    return radios;
  }

  static generateSlides(arr, projectName) {
    let slides = `
                    <div class="project-slide first-slide">
                      <img
                        src="${arr[0]}"
                        alt="${projectName} first image"
                      />
                    </div>
                  `;

    for (let i = 1; i < arr.length; i++) {
      const slide = `
                    <div class="project-slide">
                      <img
                        src="${arr[i]}"
                        alt="${projectName} second image"
                      />
                    </div>
                  `;
      slides += slide;
    }

    return slides;

    // return `
    //         <div class="project-slide first-slide">
    //           <img
    //             src="${arr[0]}"
    //             alt="${projectName} first image"
    //           />
    //         </div>
    //         <div class="project-slide">
    //           <img
    //             src="${arr[1]}"
    //             alt="${projectName} second image"
    //           />
    //         </div>
    //         <div class="project-slide">
    //           <img
    //             src="${arr[2]}"
    //             alt="${projectName} third image"
    //           />
    //         </div>
    //         <div class="project-slide">
    //           <img
    //             src="${arr[3]}"
    //             alt="${projectName} fourth image"
    //           />
    //         </div>
    //         <div class="project-slide">
    //           <img
    //             src="${arr[4]}"
    //             alt="${projectName} fifth image"
    //           />
    //         </div>
    //         <div class="project-slide">
    //           <img
    //             src="${arr[5]}"
    //             alt="${projectName} sixth image"
    //           />
    //         </div>
    //       `;
  }

  static generateAutoNavBtns(arr) {
    let autoBtns = "";
    for (let i = 1; i <= arr.length; i++) {
      const autoBtn = `<div class="auto-btn${i}"></div>`;
      autoBtns += autoBtn;
    }

    return `
          <div class="navigation-auto">
            ${autoBtns}
          </div>
          `;
  }

  static generateManualNavLabels(projectIdName, arr) {
    let labels = "";
    for (let i = 1; i <= arr.length; i++) {
      const label = `<label 
                          for="${projectIdName}-radio${i}" 
                          class="radio-btn"
                          id="${i}"
                          >
                    </label>
                    `;
      labels += label;
    }

    return `
            <div class="radio-btns radio-btns--${projectIdName}">
              ${labels}
            </div>
          `;
  }

  static activateSlideShow(counter, timer, manualNav, projectIdName, arr) {
    counter = 1;
    timer = this.getTimer(counter, `${projectIdName}`, arr.length);

    // Manual navigation
    manualNav = document.querySelector(`.radio-btns--${projectIdName}`);

    manualNav.addEventListener("click", (e) => {
      clearInterval(timer);
      counter = e.target.getAttribute("id");
      timer = this.getTimer(counter, `${projectIdName}`, arr.length);
    });
  }

  static getTimer(counter, project, uppperLimit) {
    return setInterval(() => {
      document.getElementById(project + "-radio" + counter).checked = true;
      counter++;
      if (counter > uppperLimit) {
        counter = 1;
      }
    }, 3000);
  }
}

export default Slide;
