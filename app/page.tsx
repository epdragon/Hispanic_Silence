import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, FileText, BarChart3, Vote, Shield, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Vote className="h-8 w-8 text-emerald-600" />
              <span className="font-serif font-bold text-xl text-slate-900">Hispanic Votes Matter Texas</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                About
              </a>
              <a href="#rights" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">              </a>
              <a href="#get-involved" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">              </a>
              <a href="#impact" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">              </a>
              <a href="#metrics" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                Hispanic Voter Metrics
              </a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
              Forensic Public Policy Analysis
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Our Voices, Securing Our Rights
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-3xl">
              Through rigorous policy analysis and community engagement, we advocate for Hispanic voting rights and
              civic participation across Texas. Your voice matters, your vote counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-slate-100 font-semibold">
                Know Your Rights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Get Involved Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine forensic policy analysis with grassroots advocacy to ensure Hispanic communities have equal
              access to voting rights and civic participation in Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-xl">Policy Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Rigorous forensic analysis of voting policies, identifying barriers and advocating for equitable
                  solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-xl">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Building bridges within Hispanic communities to increase civic participation and voter turnout.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-xl">Rights Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Defending voting rights through legal advocacy, education, and policy reform initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Know Your Rights Section */}
      <section id="rights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Know Your Rights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay informed about your voting rights and how to exercise them effectively in Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Voter Registration",
                description: "Learn how to register to vote and update your registration information.",
                icon: FileText,
              },
              {
                title: "Voting Process",
                description: "Understand the voting process, from early voting to election day procedures.",
                icon: Vote,
              },
              {
                title: "Your Rights",
                description: "Know your rights as a voter and what to do if they're violated.",
                icon: Shield,
              },
              {
                title: "Language Assistance",
                description: "Access voting materials and assistance in Spanish and other languages.",
                icon: Users,
              },
              {
                title: "Polling Locations",
                description: "Find your polling place and understand accessibility requirements.",
                icon: BarChart3,
              },
              {
                title: "Report Issues",
                description: "Know how to report voting irregularities or rights violations.",
                icon: Heart,
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hispanic Voter Metrics Section */}
      <section id="metrics" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Hispanic Voter Metrics</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive forensic analysis revealing critical patterns in Hispanic voter participation across Texas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-3xl text-slate-900 mb-4">The Delta Factor</CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  Our comprehensive forensic analysis reveals significant disparities in Hispanic voter participation
                  and access across Texas counties. This groundbreaking research identifies key barriers and proposes
                  evidence-based solutions for equitable civic engagement.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">23%</div>
                    <div className="text-sm text-slate-600">Participation Gap</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">254</div>
                    <div className="text-sm text-slate-600">Counties Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">1.2M</div>
                    <div className="text-sm text-slate-600">Voters Impacted</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" asChild>
                    <a
                      href="https://docs.google.com/document/d/1-D0bmgClNBeWeEimHZTKc_eVQvqOyoUhGxuZNkxzQMM/edit?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read The Findings
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    asChild
                  >
                    <a href="https://youtu.be/g5Dj5kWTeAY?feature=shared" target="_blank" rel="noopener noreferrer">
                      Watch Report Video
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://data.capitol.texas.gov/topic/redistricting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Access Data Portal
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from community members whose lives have been changed through civic engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                location: "Houston, TX",
                story:
                  "Through HVMT's voter education program, I learned about my rights and helped register 50 new voters in my neighborhood.",
                impact: "50+ New Voters",
              },
              {
                name: "Carlos Mendoza",
                location: "San Antonio, TX",
                story:
                  "The policy analysis helped our community challenge discriminatory voting practices and secure better polling access.",
                impact: "Policy Change",
              },
              {
                name: "Ana Gutierrez",
                location: "Dallas, TX",
                story:
                  "I became a community organizer after attending HVMT workshops. Now I lead voter registration drives across the city.",
                impact: "Community Leader",
              },
            ].map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription>{story.location}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">"{story.story}"</p>
                  <Badge className="bg-emerald-100 text-emerald-700">{story.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Join our movement to strengthen Hispanic civic participation across Texas. Every action makes a
              difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Volunteer",
                description: "Help with voter registration drives and community outreach",
                action: "Join Us",
              },
              {
                title: "Donate",
                description: "Support our policy research and advocacy efforts",
                action: "Contribute",
              },
              {
                title: "Spread the Word",
                description: "Share our mission with your family and community",
                action: "Share",
              },
              {
                title: "Stay Informed",
                description: "Subscribe to our newsletter for updates and alerts",
                action: "Subscribe",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-100 mb-4">{item.description}</CardDescription>
                  <Button variant="secondary" className="w-full bg-white text-emerald-700 hover:bg-slate-100">
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Vote className="h-8 w-8 text-emerald-400" />
                <span className="font-serif font-bold text-xl">Hispanic Votes Matter Texas</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Empowering Hispanic communities through forensic policy analysis, civic engagement, and voting rights
                advocacy across Texas.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#rights" className="hover:text-emerald-400 transition-colors">
                    Know Your Rights
                  </a>
                </li>
                <li>
                  <a href="#get-involved" className="hover:text-emerald-400 transition-colors">
                    Get Involved
                  </a>
                </li>
                <li>
                  <a href="#metrics" className="hover:text-emerald-400 transition-colors">
                    Hispanic Voter Metrics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-300">
                <li>info@hispanicvotesmattertx.org</li>
                <li>(512) 555-0123</li>
                <li>Austin, Texas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Hispanic Votes Matter Texas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
