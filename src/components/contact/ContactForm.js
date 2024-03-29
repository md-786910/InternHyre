import React from "react";

function ContactForm() {
  return (
    <div class="mt-5 conatiner-xxl ">
      <div class="text-center">
        <h3 class="text-primary">How Can We Help You?</h3>
        <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisic</p>
      </div>
      <div
        class=" d-flex align-items-center justify-content-center wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <div class="bg-white col-md-4">
          <div class="p-4 rounded shadow-md">
            <div>
              <label for="name" class="form-label">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="mt-3">
              <label for="email" class="form-label">
                Your Email
              </label>
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="mt-3">
              <label for="subject" class="form-label">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                class="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div class="mt-3 mb-3">
              <label for="message" class="form-label">
                Message
              </label>
              <textarea
                name="message"
                cols="20"
                rows="6"
                class="form-control"
                placeholder="message"
              ></textarea>
            </div>
            <button class="btn btn-primary">Submit Form</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
