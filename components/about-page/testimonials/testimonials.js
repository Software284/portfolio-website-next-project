import classes from './testimonials.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import TestimonialFormat from '../../common-page/testimonials-format/testimonial-format';
function Testimonials(){
    return (
      <section id="testimonials" class="py-4">
        <div class="container text-center">
          <HeaderFormat
            title="TESTIMONIAL"
            description="Take a look at what my clients say..."
          />
          <div className={classes.testimonials}>
            <div>
              <TestimonialFormat
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!"
                image="img/testimonials/person1.jpg"
                address="Sam Smith,New York"
              />
            </div>
            <div>
                  <TestimonialFormat
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!"
                    image="img/testimonials/person2.jpg"
                    address="Sara Williams, Michigan"
                  />
            </div>
            <div>
                <TestimonialFormat
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!"
                    image="img/testimonials/person3.jpg"
                    address="Jill Johnson, London"
                />
            </div>
            <div>
                <TestimonialFormat
                    message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eos vitae at exercitationem fugit voluptatibus dolorum quisquam ex aliquam aut neque harum corrupti, impedit repudiandae iure. Modi ratione sapiente vero!"
                    image="img/testimonials/person4.jpg"
                    address="Steve Thompson, Boston"
                />
                </div>
              </div>
            </div>
      </section>
    );
}
export default Testimonials;