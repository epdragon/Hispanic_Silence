import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, FileText, BarChart3, Vote, Shield, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-emerald-600 backdrop-blur-sm border-b border-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/hispanic-votes-matter-logo.jpeg" alt="HVMT Logo" className="h-10 w-10 rounded-full" />
              <Vote className="h-8 w-8 text-white" />
              <span className="font-serif font-bold text-xl text-white">Hispanic Votes Matter Texas</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-emerald-100 hover:text-white transition-colors font-medium">
                About
              </a>
              <a href="#rights" className="text-emerald-100 hover:text-white transition-colors font-medium">
                Know Your Rights
              </a>
              <a href="#metrics" className="text-emerald-100 hover:text-white transition-colors font-medium">
                Hispanic Voter Metrics
              </a>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white text-emerald-600 py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-600 border-emerald-200">
              Forensic Public Policy Analysis
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Greg Abbott and the Texas GOP: The Racist Formula Exposed
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              This isn't just politics, it's a calculated racial strategy. A new forensic analysis proves Governor
              Abbott and the Texas GOP used a secret mathematical formula to deliberately target and dilute the votes of
              Hispanic Texans. The new congressional maps were engineered to systematically weaken Hispanic communities,
              and we have the proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold">
                See The Evidence
              </Button>
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hispanic Voter Metrics Section */}
      <section id="metrics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-emerald-600 mb-4">Hispanic Voter Metrics</h2>
            <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
              Comprehensive forensic analysis revealing critical patterns in Hispanic voter participation across Texas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-3xl text-emerald-600 mb-4">The Delta Factor</CardTitle>
                <CardDescription className="text-lg text-emerald-600 leading-relaxed">
                  Our comprehensive forensic analysis reveals significant disparities in Hispanic voter participation
                  and access across Texas counties. This groundbreaking research identifies key barriers and proposes
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
        </div>
      </section>

      {/* Data & Research Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-emerald-600 mb-4">Data & Research</h2>
            <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
              Access comprehensive datasets and research findings that drive our policy recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-xl text-emerald-600">Texas Redistricting Data</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-emerald-600 leading-relaxed mb-6">
                  Official redistricting datasets from the Texas Capitol providing comprehensive demographic and voting
                  data across all counties.
                </CardDescription>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <a
                    href="https://data.capitol.texas.gov/topic/redistricting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Data
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-xl text-emerald-600">Research Methodology</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-emerald-600 leading-relaxed mb-6">
                  Detailed documentation of our forensic analysis methods, statistical models, and data validation
                  processes.
                </CardDescription>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  View Methods
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-emerald-600 mb-4">The Challenge We Address</h2>
            <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
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
                <CardTitle className="font-serif text-xl text-emerald-600">Policy Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-emerald-600 leading-relaxed">
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
                <CardTitle className="font-serif text-xl text-emerald-600">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-emerald-600 leading-relaxed">
                  Building bridges within Hispanic communities to increase civic participation and voter turnout.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-xl text-emerald-600">Rights Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-emerald-600 leading-relaxed">
                  Defending voting rights through legal advocacy, education, and policy reform initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Know Your Rights Section */}
      <section id="rights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-emerald-600 mb-4">Know Your Rights</h2>
            <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
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
                    <CardTitle className="text-lg text-emerald-600">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Contact Section */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">Contact Us</h2>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to learn more about our research or discuss policy solutions? Get in touch with our team.
            </p>
            <div className="mb-8 text-emerald-100">
              <p className="text-lg mb-2">Website: www.hvmtx.com</p>
              <p className="text-lg">Email: info@hvmtx.com</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold" asChild>
                <a href="mailto:info@hvmtx.com">
                  Email Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
                <Vote className="h-8 w-8 text-white" />
                <span className="font-serif font-bold text-xl">Hispanic Votes Matter Texas</span>
              </div>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Empowering Hispanic communities through forensic policy analysis, civic engagement, and voting rights
                advocacy across Texas.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50" size="sm">
                  Facebook
                </Button>
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50" size="sm">
                  Twitter
                </Button>
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50" size="sm">
                  Instagram
                </Button>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#rights" className="hover:text-white transition-colors">
                    Know Your Rights
                  </a>
                </li>
                <li>
                  <a href="#metrics" className="hover:text-white transition-colors">
                    Hispanic Voter Metrics
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-emerald-100">
                <li>info@hvmtx.com</li>
                <li>www.hvmtx.com</li>
                <li>Austin, Texas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-500 mt-12 pt-8 text-center text-emerald-100">
            <p>&copy; 2024 Hispanic Votes Matter Texas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
