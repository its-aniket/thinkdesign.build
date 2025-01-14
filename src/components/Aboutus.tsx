import React from "react";
import {
  Building2,
  PaintBucket,
  Trophy,
  Star,
  Clock,
  Target,
  Compass,
  Heart,
} from "lucide-react";

interface FeatureProps {
    text: string;
  }

  interface TeamMemberProps {
    image: string;
    name: string;
    achievements: string[];
  }

const AboutUs = () => {
  return (
    <div className="mx-4 py-12">
      <div className="space-y-2 mb-8">
        <span className="text-neutral-600 uppercase tracking-wider text-sm">
          our expertise
        </span>
        <div className="h-[1px] w-full bg-neutral-200"></div>
      </div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">thinkdesign.build</h1>
          <p className="text-lg text-neutral-700">
            A fresh venture backed by decades of excellence. We combine
            architectural mastery and interior design innovation to create
            spaces that transform how people live and work.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="text-sm">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-600" />
              <span className="text-sm">Award-Winning Team</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-neutral-100 to-emerald-50 rounded-2xl h-[400px] relative overflow-hidden shadow-2xl">
          <img
            src="/images/img13.jpg"
            alt="Featured Architecture"
            className="object-cover w-full h-full "
          />
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="mb-16 grid md:grid-cols-3 gap-8 ">
        <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-neutral-600">
            To create exceptional spaces that elevate human experiences through
            innovative design, sustainable practices, and unwavering attention
            to detail. We&apos;re committed to transforming our clients&apos;
            visions into reality while setting new standards in architectural
            excellence.
          </p>
        </div>

        <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-neutral-600">
            To be recognized as a leading force in architectural innovation,
            where every project becomes a testament to the perfect harmony
            between form and function. We envision a future where sustainable
            design principles shape the way communities live and thrive.
          </p>
        </div>

        <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold">Our Values</h3>
          </div>
          <ul className="text-neutral-600 space-y-2">
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Excellence in every detail</span>
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Sustainable and responsible design</span>
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Client-centered approach</span>
            </li>
            <li className="flex items-start gap-2">
              <Star className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <span>Innovation and creativity</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Services */}
      <div className="grid md:grid-cols-2 gap-6 mb-16 ">
        <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 shadow-2xl">
          <Building2 className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">
            Architectural Excellence
          </h3>
          <p className="text-neutral-600 mb-4">
            We believe in creating spaces that not only meet functional
            requirements but also inspire and elevate the human experience. Our
            architectural solutions blend innovation with timeless design
            principles, ensuring each project becomes a lasting testament to
            excellence.
          </p>
          <div className="space-y-2">
            <Feature text="Custom Residential Design" />
            <Feature text="Commercial Projects" />
            <Feature text="Sustainable Architecture" />
          </div>
        </div>

        <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-200 shadow-2xl">
          <PaintBucket className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Interior Design</h3>
          <p className="text-neutral-600 mb-4">
            Our interior design philosophy centers on creating harmonious spaces
            that reflect both purpose and personality. Through thoughtful
            material selection and innovative space planning, we craft interiors
            that inspire and function flawlessly.
          </p>
          <div className="space-y-2">
            <Feature text="Space Planning" />
            <Feature text="Material Selection" />
            <Feature text="Custom Furniture Design" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center mb-12 shad">
          <h2 className="text-3xl font-bold mb-4">Expert Team</h2>
          <p className="text-neutral-600">
            While ThinkDesign.Build is a new venture, our team brings over a
            decade and a half of industry-leading expertise to every project. We
            believe that great design comes from collaboration, innovation, and
            a deep understanding of our clients&apos; needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
          <div className="shadow-2xl rounded-xl">
            <TeamMember
              image="/images/principle_arch.png"
              name="Principal Architect"
              achievements={[
                "15+ years of architectural experience",
                "Award-winning design portfolio",
                "Sustainable design specialist",
              ]}
            />
          </div>
          <div className="shadow-2xl rounded-xl">
            <TeamMember
              image="/images/principle_arch.png"
              name="Interior Design Lead"
              achievements={[
                "Extensive commercial project experience",
                "Custom furniture design expert",
                "Space optimization specialist",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature:React.FC<FeatureProps> = ({ text }) => (
  <div className="flex items-center gap-2">
    <Star className="w-4 h-4 text-emerald-600" />
    <span className="text-sm text-neutral-700">{text}</span>
  </div>
);

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, achievements }) => (
  <div className="bg-white p-6 rounded-xl border border-neutral-200">
    <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
    <h4 className="text-xl font-semibold text-center mb-4">{name}</h4>
    <div className="space-y-2">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="text-sm text-neutral-600">{achievement}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUs;
