import { useNavigate, useLocation } from "react-router-dom";
import { EyeIcon } from "lucide-react";
import type { PlanningResponse } from "../../types/planning";
import styles from "./Table.module.css";

interface TableProps {
  plannings: PlanningResponse[];
}

export default function Table({ plannings }: TableProps) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
      <div className={styles.tableContainer}>
          <table className={styles.tablePlanning}>
              <thead>
                  <tr className={styles.tableHeaderRow}>
                      <th className={styles.tableHeaderCell}>
                          <span>Request Code</span>
                      </th>
                      <th className={styles.tableHeaderCell}>
                          <span>Timestamp</span>
                      </th>
                      <th className={styles.tableHeaderCell}>
                          <span>Slot Active</span>
                      </th>
                      <th className={styles.tableHeaderCell}>
                          <span>Status</span>
                      </th>
                      <th className={styles.tableHeaderCellActions}>
                          <span>Actions</span>
                      </th>
                  </tr>
              </thead>

              <tbody className={styles.tableBody}>
                  {plannings.length === 0 ? (
                      <tr>
                          <td
                              colSpan={5}
                              className={styles.tableEmpty}
                          >
                              No Posts
                          </td>
                      </tr>
                  ) : (
                      plannings.map((planning) => (
                          <tr key={planning.id} className={styles.tableRow}>
                                <td className={styles.tableCellNo}>
                                    {planning.requestCode}
                                </td>

                                <td className={styles.tableCellNo}>
                                    {planning.createdAt}
                                </td>

                                <td className={styles.tableCellNo}>
                                    {planning.slots.length}
                                </td>

                                <td className={styles.tableCellNo}>
                                    {planning.status}
                                </td>

                                <td className={styles.tableCellActions}>
                                    <div className={styles.actionsContainer}>
                                        <button
                                            onClick={() => { navigate(`/preview/${planning.id}`) }} 
                                            className={`${styles.btnPreview} ${location.pathname === `/preview/${planning.id}` ? 'active' : ''}`}
                                        >
                                            <EyeIcon size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                      ))
                  )}
              </tbody>
          </table>
      </div>
    );
}