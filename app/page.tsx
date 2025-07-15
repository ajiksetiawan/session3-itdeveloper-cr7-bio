import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Trophy, Target, DollarSign, Car, Home, Heart, Calendar, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function RonaldoBiography() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Cristiano Ronaldo</h1>
              <p className="text-xl md:text-2xl text-blue-100">The Greatest of All Time</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  5x Ballon d'Or
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  900+ Goals
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  5x Champions League
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ronaldo-hero.jpg"
                alt="Cristiano Ronaldo in Portugal national team jersey"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Early Life */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Early Life & Beginnings</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Birth & Childhood
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Born on February 5, 1985, in Funchal, Madeira, Portugal. Cristiano Ronaldo dos Santos Aveiro grew up
                    in a working-class family. His father José worked as a municipal gardener and his mother Maria was a
                    cook. From a young age, Ronaldo showed exceptional talent for football.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Youth Career</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Started at Andorinha (1992-1995)</li>
                    <li>• Moved to Nacional (1995-1997)</li>
                    <li>• Joined Sporting CP academy (1997-2003)</li>
                    <li>• Made professional debut at 17</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Image
              src="/images/young-ronaldo.jpg"
              alt="Young Cristiano Ronaldo during his early Manchester United days"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Career Peak */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Career Peak & Spectacular Feats</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-yellow-500" />
                <CardTitle>Real Madrid Era</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">2009-2018</p>
                <p className="text-gray-600">450 goals in 438 games</p>
                <p className="text-sm text-gray-500">Most successful period</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 mx-auto text-red-500" />
                <CardTitle>Goal Machine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600">900+ Goals</p>
                <p className="text-gray-600">All competitions</p>
                <p className="text-sm text-gray-500">First to reach this milestone</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-purple-500" />
                <CardTitle>Champions League</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">140 Goals</p>
                <p className="text-gray-600">All-time top scorer</p>
                <p className="text-sm text-gray-500">5 titles won</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Most Spectacular Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Individual Records</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• First player to score 900+ career goals</li>
                    <li>• Most international goals (130+)</li>
                    <li>• Most Champions League goals (140)</li>
                    <li>• Most hat-tricks in Champions League (8)</li>
                    <li>• Only player to score in 5 World Cups</li>
                    <li>• Most goals in European Championships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Team Achievements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 5 Champions League titles</li>
                    <li>• 7 League titles (England, Spain, Italy)</li>
                    <li>• European Championship 2016</li>
                    <li>• Nations League 2019</li>
                    <li>• 3 Premier League titles</li>
                    <li>• 4 La Liga titles</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Career Statistics</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600">900+</div>
                <p className="text-gray-600">Career Goals</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600">250+</div>
                <p className="text-gray-600">Assists</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-red-600">1,200+</div>
                <p className="text-gray-600">Games Played</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-yellow-600">150+</div>
                <p className="text-gray-600">Yellow Cards</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Club Career Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sporting CP (2002-2003)</span>
                    <span className="font-semibold">5 goals in 31 games</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Manchester United (2003-2009, 2021-2022)</span>
                    <span className="font-semibold">145 goals in 346 games</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Real Madrid (2009-2018)</span>
                    <span className="font-semibold">450 goals in 438 games</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Juventus (2018-2021)</span>
                    <span className="font-semibold">101 goals in 134 games</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Al Nassr (2023-present)</span>
                    <span className="font-semibold">50+ goals in 60+ games</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Career</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Caps for Portugal</span>
                    <span className="font-semibold">200+</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>International Goals</span>
                    <span className="font-semibold">130+</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>World Cups Played</span>
                    <span className="font-semibold">5 (2006-2022)</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>European Championships</span>
                    <span className="font-semibold">6 (2004-2024)</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Major Tournaments Won</span>
                    <span className="font-semibold">Euro 2016, Nations League 2019</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Financial Empire</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 mx-auto text-green-500" />
                <CardTitle>Net Worth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">$500M+</p>
                <p className="text-gray-600">Estimated total wealth</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 mx-auto text-blue-500" />
                <CardTitle>Annual Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">$200M+</p>
                <p className="text-gray-600">Per year (2023)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-purple-500" />
                <CardTitle>Forbes Ranking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">#1</p>
                <p className="text-gray-600">Highest-paid athlete</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Income Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Salary & Contracts</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Al Nassr: $200M per year (2023-2025)</li>
                    <li>• Manchester United: $30M per year (2021-2022)</li>
                    <li>• Juventus: $34M per year (2018-2021)</li>
                    <li>• Real Madrid: $50M per year (2009-2018)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Endorsements & Business</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Nike: Lifetime deal worth $1B+</li>
                    <li>• CR7 Brand: Fashion, hotels, gyms</li>
                    <li>• Social Media: $3M+ per post</li>
                    <li>• Various sponsorships: $50M+ annually</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assets */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Luxury Assets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Car Collection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Bugatti Centodieci</span>
                    <span className="font-semibold">$9M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Bugatti Chiron</span>
                    <span className="font-semibold">$3M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>McLaren Senna</span>
                    <span className="font-semibold">$1M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Ferrari F12tdf</span>
                    <span className="font-semibold">$500K</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Lamborghini Aventador</span>
                    <span className="font-semibold">$400K</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Total collection: 20+ luxury cars worth $20M+</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Real Estate Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Madrid Mansion</span>
                    <span className="font-semibold">$6M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Turin Penthouse</span>
                    <span className="font-semibold">$2M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Madeira Properties</span>
                    <span className="font-semibold">$3M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>New York Apartment</span>
                    <span className="font-semibold">$18M</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Riyadh Compound</span>
                    <span className="font-semibold">$10M</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Total portfolio: $50M+ in luxury properties</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Family Life</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Personal Life
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Partner</h4>
                    <p className="text-gray-600">Georgina Rodríguez (since 2016)</p>
                    <p className="text-sm text-gray-500">Spanish model and influencer</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold">Children</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Cristiano Jr. (born 2010)</li>
                      <li>• Eva & Mateo (twins, born 2017)</li>
                      <li>• Alana Martina (born 2017)</li>
                      <li>• Bella Esmeralda (born 2022)</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold">Parents</h4>
                    <p className="text-gray-600">José Dinis Aveiro (father, deceased 2005)</p>
                    <p className="text-gray-600">Maria Dolores dos Santos (mother)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Image
              src="/images/ronaldo-family.jpg"
              alt="Cristiano Ronaldo with his family and children"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Awards & Honors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Individual Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5× Ballon d'Or (2008, 2013, 2014, 2016, 2017)</li>
                  <li>• 4× European Golden Shoe</li>
                  <li>• 5× UEFA Best Player in Europe</li>
                  <li>• 2× FIFA The Best</li>
                  <li>• 11× FIFPro World XI</li>
                  <li>• UEFA Champions League top scorer (7×)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Club Trophies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5× UEFA Champions League</li>
                  <li>• 7× League titles</li>
                  <li>• 2× Serie A (Juventus)</li>
                  <li>• 2× La Liga (Real Madrid)</li>
                  <li>• 3× Premier League (Man United)</li>
                  <li>• 4× FIFA Club World Cup</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Honors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• UEFA European Championship (2016)</li>
                  <li>• UEFA Nations League (2019)</li>
                  <li>• European Championship top scorer (2021)</li>
                  <li>• World Cup appearances (5)</li>
                  <li>• Most international goals (130+)</li>
                  <li>• Most international caps for Portugal (200+)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <div className="container mx-auto max-w-6xl">
          <p className="text-gray-400">
            "Dreams are not what you see in your sleep, dreams are things which do not let you sleep." - Cristiano
            Ronaldo
          </p>
          <p className="mt-4 text-sm text-gray-500">
            © 2024 Cristiano Ronaldo Biography. All statistics updated as of 2024.
          </p>
        </div>
      </footer>
    </div>
  )
}
