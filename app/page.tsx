import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, FileText, BarChart3, Vote, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-emerald-600 backdrop-blur-sm border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-2">
              <Vote className="h-6 w-6 text-white" />
              <span className="font-serif font-bold text-lg text-white">Hispanic Votes Matter Texas</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-white hover:text-emerald-200 transition-colors font-medium text-sm">
                About
              </a>
              <a href="#rights" className="text-white hover:text-emerald-200 transition-colors font-medium text-sm">
                Know Your Rights
              </a>
              <a
                href="#get-involved"
                className="text-white hover:text-emerald-200 transition-colors font-medium text-sm"
              >
                Get Involved
              </a>
              <a href="#metrics" className="text-white hover:text-emerald-200 transition-colors font-medium text-sm">
                Hispanic Voter Metrics
              </a>
              <Button size="sm" className="bg-white hover:bg-emerald-50 text-emerald-600">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12 text-center">
              <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200">
                Forensic Public Policy Analysis
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight text-emerald-600">
                Empowering Our Voices, Securing Our Rights
              </h1>
              <p className="text-lg md:text-xl text-emerald-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Through rigorous policy analysis and community engagement, we advocate for Hispanic voting rights and
                civic participation across Texas. Your voice matters, your vote counts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  Know Your Rights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  Get Involved Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-emerald-600" />
              </div>
              <CardTitle className="font-serif text-3xl text-emerald-600 mb-4">Hispanic Voter Metrics</CardTitle>
              <CardDescription className="text-lg text-emerald-600 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive forensic analysis reveals significant disparities in Hispanic voter participation and
                access across Texas counties. This groundbreaking research identifies key barriers and proposes
                evidence-based solutions for equitable civic engagement.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">23%</div>
                  <div className="text-sm text-emerald-600">Participation Gap</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">254</div>
                  <div className="text-sm text-emerald-600">Counties Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1.2M</div>
                  <div className="text-sm text-emerald-600">Voters Impacted</div>
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
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" asChild>
                  <a href="https://youtu.be/g5Dj5kWTeAY?feature=shared" target="_blank" rel="noopener noreferrer">
                    Watch Report Video
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" asChild>
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
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-serif text-3xl text-emerald-600 mb-4">Our Mission</CardTitle>
              <CardDescription className="text-lg text-emerald-600 max-w-3xl mx-auto">
                We combine forensic policy analysis with grassroots advocacy to ensure Hispanic communities have equal
                access to voting rights and civic participation in Texas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-xl text-emerald-600 mb-3">Policy Analysis</h3>
                  <p className="text-emerald-600 leading-relaxed">
                    Rigorous forensic analysis of voting policies, identifying barriers and advocating for equitable
                    solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-xl text-emerald-600 mb-3">Community Engagement</h3>
                  <p className="text-emerald-600 leading-relaxed">
                    Building bridges within Hispanic communities to increase civic participation and voter turnout.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-serif text-xl text-emerald-600 mb-3">Rights Protection</h3>
                  <p className="text-emerald-600 leading-relaxed">
                    Defending voting rights through legal advocacy, education, and policy reform initiatives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-serif text-3xl text-emerald-600 mb-4">Know Your Rights</CardTitle>
              <CardDescription className="text-lg text-emerald-600 max-w-3xl mx-auto">
                Stay informed about your voting rights and how to exercise them effectively in Texas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
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
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-600 mb-2">{item.title}</h3>
                    <p className="text-emerald-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="font-serif text-3xl text-emerald-600 mb-4">Contact Us</CardTitle>
              <CardDescription className="text-lg text-emerald-600 max-w-3xl mx-auto">
                Get in touch with us to learn more about our work or to get involved in our mission.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Vote className="h-8 w-8 text-emerald-600" />
                    <span className="font-serif font-bold text-xl text-emerald-600">Hispanic Votes Matter Texas</span>
                  </div>
                  <p className="text-emerald-600 mb-6 leading-relaxed">
                    Empowering Hispanic communities through forensic policy analysis, civic engagement, and voting
                    rights advocacy across Texas.
                  </p>
                  <div className="space-y-3 text-emerald-600">
                    <p>📧 info@hispanicvotesmattertx.org</p>
                    <p>📞 (512) 555-0123</p>
                    <p>📍 Austin, Texas</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-semibold text-xl text-emerald-600 mb-6">Get Involved</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Volunteer</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Donate</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Share</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Subscribe</Button>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Facebook</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Twitter</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Instagram</Button>
                  </div>
                </div>
              </div>

              <div className="border-t border-emerald-200 mt-8 pt-6 text-center text-emerald-600">
                <p>&copy; 2024 Hispanic Votes Matter Texas. All rights reserved.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
