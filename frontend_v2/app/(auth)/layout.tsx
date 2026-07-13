"use client"

import { Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left: Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden bg-card border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 flex flex-col justify-between w-full p-12">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Sentinel<span className="text-primary">AI</span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <h1 className="text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Unified Autonomous{" "}
              <span className="text-primary">Threat Detection</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Enterprise-grade AI platform for cyber threat visualization,
              bilingual voice intake, automated FIR filing, and real-time
              community fraud ring detection.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">99.7%</span>
                <span className="text-xs text-muted-foreground">Uptime SLA</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">{'<'}200ms</span>
                <span className="text-xs text-muted-foreground">Response Time</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">AES-256</span>
                <span className="text-xs text-muted-foreground">Encryption</span>
              </div>
            </div>
          </motion.div>

          <div className="text-xs text-muted-foreground">
            <p>© 2026 SentinelAI. NCRB Compliant.</p>
            <p className="mt-1">Standards conforming to Cyber Incident Response Guidelines.</p>
          </div>
        </div>
      </div>

      {/* Right: Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
