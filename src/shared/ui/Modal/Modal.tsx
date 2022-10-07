import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";
import "./Modal.css";

interface ModalProps {
  display: boolean;
  onClose: () => void;
}

export const Modal = ({
  display,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) =>
  display
    ? createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={onClose}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
