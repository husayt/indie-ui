import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FormElementsSelectorCommand } from '@/form-builder/components/form-elements-selector-command';
import { TemplatesSelect } from '@/form-builder/components/templates-select';
import { formElementsList } from '@/form-builder/constant/form-elements-list';
import { FormElement } from '@/form-builder/form-types';
import useFormBuilderStore from '@/form-builder/hooks/use-form-builder-store';
import { MdAdd } from 'react-icons/md';

//======================================
export function FormElementSelector() {
  const appendElement = useFormBuilderStore((s) => s.appendElement);
  const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  return (
    <ScrollArea
      className="border rounded-sm border-dashed overflow-auto p-3 w-full h-full max-h-96 md:col-span-2"
      
    >
      <TemplatesSelect />
      <FormElementsSelectorCommand />
      <div className="flex md:flex-col flex-wrap gap-2 flex-row">
        {formElementsList.map((o) => (
          <Button
            key={o.name}
            size="sm"
            variant="secondary"
            onClick={() => {
              appendElement({
                fieldType: o.fieldType as FormElement['fieldType'],
                stepIndex: isMS ? formElements.length - 1 : undefined,
              });
            }}
            className="gap-1 justify-start rounded-lg w-fit md:w-full relative text-sm px-2"
          >
            <div className="flex-row-start gap-1">
              <MdAdd />
              {o.name}
              {o.isNew && (
                <Badge className="text-sm rounded-full ml-1 size-5 center">
                  N
                </Badge>
              )}
            </div>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
