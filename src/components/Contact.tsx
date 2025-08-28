import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Get In <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge IT solutions? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We're here to help you succeed. Whether you need a custom web application, mobile app, data analytics solution, or UI/UX design, our team is ready to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                   <Button
                     onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com', '_blank')}
                     className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow text-black font-bold px-6 py-2 rounded-lg"
                   >
                     <Mail className="mr-2 h-4 w-4" />
                     info@inobux.com
                   </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Global Services</h4>
                  <p className="text-muted-foreground">Remote-first, worldwide delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10">
              <h4 className="font-semibold text-lg mb-2">Why Choose InoBux?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Expert team with 5+ years experience</li>
                <li>✓ Modern technologies and best practices</li>
                <li>✓ Transparent communication and regular updates</li>
                <li>✓ Competitive pricing and flexible engagement models</li>
                <li>✓ Post-launch support and maintenance</li>
              </ul>
            </div>
          </div>

          {/* Contact Information Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Start?</CardTitle>
              <CardDescription className="text-base">
                Click the button below to send us an email directly through Gmail and let's discuss your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@inobux.com&su=Project%20Inquiry&body=Hi%20Inobux%20Team,%0A%0AI%20am%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details:%0A-%20Service%20needed:%20%0A-%20Timeline:%20%0A-%20Budget%20range:%20%0A-%20Additional%20details:%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards', '_blank')}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow transition-all duration-300 text-lg py-6"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email via Gmail
                </Button>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-lg p-6 border border-primary/10">
                <h4 className="font-semibold text-lg mb-4 text-center">What Happens Next?</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                    <p>Send us an email with your project details</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                    <p>We'll respond within 24 hours with questions and initial ideas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                    <p>Schedule a call to discuss your project in detail</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">4</div>
                    <p>Receive a detailed proposal and timeline</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;