import classes from './testimonials.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import TestimonialFormat from '../../common-page/testimonials-format/testimonial-format';
import { testimonials } from '../../../all-array';
function Testimonials(){
    return (
      <section id="testimonials" class="py-4">
        <div class="container text-center">
          <HeaderFormat
            title="TESTIMONIAL"
            description="Take a look at what my clients say..."
          />
          <div className={classes.testimonials}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialFormat
                  message={testimonial.message}
                  image={testimonial.image}
                  address={testimonial.address}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
export default Testimonials;