import { motion } from "framer-motion";
import { Shield, Search, AlertTriangle, CheckCircle2 } from "lucide-react";

const FeaturePlagiarism = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
              {/* Scan results mock */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-foreground">Originality Report</h4>
                <span className="text-2xl font-bold text-green-600">98%</span>
              </div>
              <div className="h-3 bg-muted rounded-full mb-6 overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Chapters 1-5: No matches found
                    </p>
                    <p className="text-xs text-muted-foreground">
                      100% original content
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Chapter 6, paragraph 3: Minor similarity
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2% match with public domain text - Review recommended
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Plagiarism Check</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ensure Your Work is{" "}
              <span className="text-gradient-brand">100% Original</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Scan your manuscript for duplicated or suspicious content against 
              billions of web pages and published works. Review flagged sections 
              and rewrite them to ensure complete originality before publication.
            </p>
            <div className="space-y-4">
              {[
                { icon: Search, text: "Comprehensive web and publication scanning" },
                { icon: AlertTriangle, text: "Clear flagging of similar passages" },
                { icon: CheckCircle2, text: "Detailed originality reports" },
              ].map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePlagiarism;
