'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface BranchLocationsProps {
  branches: readonly string[];
  title?: string;
}

export default function BranchLocations({
  branches,
  title = 'Our Branches',
}: BranchLocationsProps) {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-white mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {branches.map((branch, index) => (
          <motion.div
            key={branch}
            initial={{ scale: 0.3 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15, mass: 1.5, delay: index * 0.05 }}
            className="card-glass-dark flex items-center gap-3"
          >
            <MapPin className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white">{branch}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
