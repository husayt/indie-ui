'use client';

import { JsonViewer } from '@/form-builder/components/code-viewer';
import { FormPreview } from '@/form-builder/components/form-preview';
import { useFormBuilder } from '@/form-builder/hooks/use-form-builder';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';

import { useEffect } from 'react';




//======================================
export function FormViewer() {
    
    
    const setTemplate = useFormBuilderStore((s) => s.setTemplate);
  const { submittedData, resetForm, form } = useFormBuilder();
//   const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  const setIsMS = useFormBuilderStore((s) => s.setIsMS);

  useEffect(() => {
    // resetForm()
    setIsMS(true)
    setTemplate("mbcl") 
  }, []);
  return (
    <>
      <div className="w-full h-full  mx-auto  max-w-[77rem] gap-3 py-6">
 <h1 className="text-2xl md:text-3xl text-center text-pretty font-bold mb-2">New Product Request Form</h1>
          <FormPreview form={form} />
          <div className="mt-32">
            <JsonViewer  json={submittedData} isMS={isMS} />       
      </div>
      </div>
     
    </>
  );
}
