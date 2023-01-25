export default function Performance() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div className="header-container">
        <div className="header">
          <div className="title">
            <h1>Performance Physique BMI Calculator</h1>
            <div className="tech">
              <img src="../tech-icons/React.svg" alt="React Logo"></img>
              <img src="../tech-icons/formspark.svg" alt="Formspark Logo"></img>
            </div>
          </div>
          <p>
            The Performance Physique BMI Calculator was commissioned by Grow
            With Pace Marketing, built as a tool for Performance Phsyique to
            gain leads for their 4Week4Kilo training program. The website guides
            the user through information on the concept, and encourages them to
            input form information to calculate their BMI (Body Mass Index) and
            submit their results and details to Performance Physique in return
            for an excercise and nutrition plan.
          </p>
        </div>
      </div>
      <div className="single-img">
        <img src="../media/pp-01.png" alt=""></img>
        <div className="image-desc">
          <p>
            The site was built using React as a one-page scroller with a header
            that transforms into a form submission element.
          </p>
        </div>
      </div>
      <div className="single-img">
        <div className="image-desc">
          <p>
            React Hooks allowed for a smoother, more fluid user experience while
            also storing the input data form submission.
          </p>
        </div>
        <img src="../media/pp-01.png" alt=""></img>
      </div>
    </>
  );
}
