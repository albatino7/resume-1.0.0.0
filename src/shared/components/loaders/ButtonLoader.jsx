import React from 'react';
import { Loader2 } from 'lucide-react';

export default function ButtonLoader({ text = "Processing..." }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Loader2 className="w-3.5 h-3.5 animate-spin" />
      <span>{text}</span>
    </span>
  );
}
