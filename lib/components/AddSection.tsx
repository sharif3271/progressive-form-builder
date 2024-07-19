import { useCallback, useEffect, useRef, useState } from "react";
import { useAddItem } from "../context";
import { FormItemType } from "../types/form.type";
import { MdiIcon } from "./MdiIcon";
import { mdiPlus } from "@mdi/js";

export const AddSection = () => {
  const addItem = useAddItem();
  const [showItems, setShowItems] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(setTimeout(() => undefined));

  const onAddItem = useCallback(
    (p: FormItemType) => {
      setShowItems(false);
      addItem(p);
    },
    [addItem],
  );

  useEffect(() => {
    const closeHandler = () => {
      clearTimeout(timeoutRef.current);
      setShowItems(false);
    };
    window.addEventListener("click", closeHandler);
    return () => {
      window.removeEventListener("click", closeHandler);
    };
  }, []);

  return (
    <div
      className="pfb-add-section"
      onClick={(e) => e.stopPropagation()}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setShowItems(false), 1000);
      }}
      onMouseOver={() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }}
    >
      <div
        className="button"
        onClick={() => setShowItems(true)}
        onMouseOver={() => setShowItems(true)}
      >
        <MdiIcon path={mdiPlus} />
      </div>

      {showItems && (
        <div className="actions">
          <div
            onClick={() => onAddItem(FormItemType.INPUT)}
            title="Add an Input"
          >
            Input
          </div>
          <div
            onClick={() => onAddItem(FormItemType.TEXTBOX)}
            title="Add a Textbox"
          >
            Textbox
          </div>
          <div
            onClick={() => onAddItem(FormItemType.MULTISELECT)}
            title="Add a Multi select"
          >
            Multi-select
          </div>
          <div
            onClick={() => onAddItem(FormItemType.SINGLESELECT)}
            title="Add a Single select"
          >
            Single-select
          </div>
          <div
            onClick={() => onAddItem(FormItemType.DROPDOWN)}
            title="Add a Dropdown"
          >
            Dropdown
          </div>
          <div onClick={() => onAddItem(FormItemType.DATE)} title="Add a Date">
            Date
          </div>
          <div onClick={() => onAddItem(FormItemType.FILE)} title="Add a File">
            File
          </div>
        </div>
      )}
    </div>
  );
};
