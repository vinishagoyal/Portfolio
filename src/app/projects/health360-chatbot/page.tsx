import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function Health360CaseStudy() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        
        {/* YouTube Video Embed */}
        <div className="mb-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/equGpnMKYx8?si=mUVd0p-WWrTROgU5"
              title="Health360 AI Customer Chatbot Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Live demonstration of the Health360 AI Customer Chatbot in action
          </p>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">Health360 AI Customer Chatbot</h1>
        <p className="text-xl text-muted-foreground mb-6">
          End-to-end product development from ideation to production
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Product Management", "AI Strategy", "Generative AI", "RAG", "Stakeholder Management", "Requirements Gathering", "Analytics"].map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="https://health360-ai-customer-chatbot.vercel.app" target="_blank">
              <Icons.globe className="mr-2 h-4 w-4" />
              Live App
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/vinishagoyal/Health360_AI_customer_chatbot" target="_blank">
              <Icons.github className="mr-2 h-4 w-4" />
              GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://youtu.be/equGpnMKYx8?si=mUVd0p-WWrTROgU5" target="_blank">
              <Icons.youtube className="mr-2 h-4 w-4" />
              Demo Video
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://docs.google.com/document/d/1z1zIDr27pgcMZdyzygvX54X5GfciW0VLgDAIVlAFKkA/edit?usp=sharing" target="_blank">
              <Icons.googleDocs className="mr-2 h-4 w-4" />
              BRD Document
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Project Overview */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Problem Statement</h4>
              <p className="text-muted-foreground">
                Health360 Health Supplements was experiencing a sharp rise in customer interactions across multiple channels (Call, WhatsApp, Email) with only 5 support agents. This led to overwhelmed staff, delayed responses, inconsistent service, and potential brand erosion. The team needed an intelligent solution to deflect routine queries while maintaining compliance with health supplement regulations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">My Role</h4>
              <p className="text-muted-foreground">
                End-to-end product ownership from initial concept to production deployment. Responsible for market research, stakeholder management, requirements gathering, solution architecture, development oversight, and performance optimization.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Timeline</h4>
              <p className="text-muted-foreground">September 2025 - 6 weeks from ideation to production</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Discovery & Research */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Discovery & Research</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Stakeholder Interviews</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Conducted interviews with CEO, Customer Support Lead, and 5 support agents</li>
                <li>Identified peak interaction times across UK and India time zones</li>
                <li>Analyzed current ticket volume and response time metrics</li>
                <li>Documented pain points and workflow inefficiencies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Market Analysis</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Researched health supplement industry compliance requirements (FSSAI/UK ASA)</li>
                <li>Evaluated existing AI chatbot solutions and identified gaps</li>
                <li>Analyzed competitor customer support strategies</li>
                <li>Determined that generic AI solutions were unsuitable due to compliance risks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Requirements Gathering</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Defined functional requirements: query classification, dynamic responses, escalation workflows</li>
                <li>Established non-functional requirements: 99.5% uptime, &lt;3s response time, regulatory compliance</li>
                <li>Created user stories for customers, support agents, and administrators</li>
                <li>Documented success metrics: 40-60% deflection rate, &lt;2min response time</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Solution Design */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Solution Design</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Technical Architecture</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Designed RAG (Retrieval Augmented Generation) system for accurate product information</li>
                <li>Implemented intelligent query classification (Complaint vs Product Query)</li>
                <li>Created dynamic response engine with approved knowledge base</li>
                <li>Built escalation workflow with confidence scoring (&lt;80% triggers human handoff)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">AI Strategy</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Selected appropriate LLM for health supplement domain</li>
                <li>Designed compliance guardrails to prevent medical claims</li>
                <li>Implemented brand voice customization for consistent messaging</li>
                <li>Created timezone-aware response system for UK/India regions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Compliance Framework</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Established content review process with legal team</li>
                <li>Implemented response filtering for regulatory compliance</li>
                <li>Created audit trail for all customer interactions</li>
                <li>Designed fallback mechanisms for sensitive queries</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Development & Implementation */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Development & Implementation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">MVP Development Approach</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Phase 1: Core chatbot with basic query handling (Week 1-2)</li>
                <li>Phase 2: Advanced AI features and analytics dashboard (Week 3-4)</li>
                <li>Phase 3: Compliance features and performance optimization (Week 5-6)</li>
                <li>Iterative testing and refinement throughout development cycle</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Cross-functional Collaboration</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Coordinated with development team for technical implementation</li>
                <li>Worked with compliance officer for regulatory approval</li>
                <li>Collaborated with customer support team for knowledge base creation</li>
                <li>Managed stakeholder expectations and provided regular updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Testing & Quality Assurance</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Conducted extensive testing with real customer queries</li>
                <li>Performed compliance review of all automated responses</li>
                <li>Load tested system for 10,000+ queries/day capacity</li>
                <li>Validated escalation workflows with support team</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Results & Impact */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Results & Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">50%</div>
                <div className="text-sm text-muted-foreground">Query Deflection Rate</div>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt;2min</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">99.5%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div className="text-center p-6 bg-orange-50 dark:bg-orange-950 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">40%</div>
                <div className="text-sm text-muted-foreground">Agent Workload Reduction</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Business Outcomes</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Reduced customer support costs by 40% through automated query handling</li>
                <li>Improved customer satisfaction with instant 24/7 support availability</li>
                <li>Enhanced agent productivity by focusing on complex, high-value interactions</li>
                <li>Achieved zero regulatory violations through robust compliance framework</li>
                <li>Provided actionable insights through real-time analytics dashboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lessons Learned */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Lessons Learned</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Key Insights</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Compliance First:</strong> In regulated industries, building compliance into the core architecture is crucial rather than adding it as an afterthought</li>
                <li><strong>Stakeholder Alignment:</strong> Regular communication and expectation management across all stakeholders prevented scope creep and ensured smooth delivery</li>
                <li><strong>Iterative Approach:</strong> MVP methodology allowed for rapid validation and course correction based on real user feedback</li>
                <li><strong>Data-Driven Decisions:</strong> Establishing clear metrics from the start enabled objective evaluation of success and areas for improvement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Future Enhancements</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>WhatsApp Business API integration for automated messaging</li>
                <li>Email parser for automatic ticket creation and responses</li>
                <li>Voice bot integration for call center automation</li>
                <li>Multilingual support for global expansion</li>
                <li>Advanced analytics with predictive insights</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-4">Interested in Learning More?</h3>
            <p className="text-muted-foreground mb-6">
              I'd be happy to discuss this project in detail and share insights about AI product development, stakeholder management, and regulatory compliance in the health supplement industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="mailto:mailtovinishagoyal@gmail.com">
                  <Icons.email className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com/in/vinisha-goyal" target="_blank">
                  <Icons.linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
