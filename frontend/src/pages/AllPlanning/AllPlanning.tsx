import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPlannings} from "../../services/PlanningService";
import type { PlanningResponse } from "../../types/planning";
import Table from "../../components/Table/Table";
import styles from "./AllPlanning.module.css";

export default function AllPlanning() {
    const [plannings, setPlannings] = useState<PlanningResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    
    const limit = 10;

    const handleNext = () => {
        setPage(prev => prev + 1); 
    };

    const handlePrevious = () => {
    if (page === 1) return;
        setPage(prev => prev - 1);
    };

    useEffect(() => {
        const fetchPlannings = async () => {
          try {
            const data = await getPlannings();

            setPlannings(data);
          } catch (error) {
            setError(
              error instanceof Error
                ? error.message
                : "Failed to fetch plannings"
            );
          } finally {
            setLoading(false);
          }
        };

        fetchPlannings();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>{error}</div>;
      }


    return (
        <div className={styles.pageHeader}>
            <div className={styles.headerTop}>
                <div>
                    <h1 className={styles.pageTitle}>
                        All Planning
                    </h1>

                    <p className={styles.pageDesc}>
                        Data All Planning.
                    </p>
                </div>
            </div>

            <Table plannings={plannings} />

            <div className={styles.paginationContainer}>
                <p className={styles.paginationInfo}>
                    {plannings.length === 0 ? 
                        'Menampilkan 0 total data'
                        : 
                        `Menampilkan ${plannings.length} total data`}
                </p>

                <div className={styles.paginationBtnWrapper}>
                    <button
                        onClick={handlePrevious}
                        disabled={page === 1}
                        className={styles.paginationBtn}
                    >
                        <ArrowLeft size={14} />
                    </button>

                    <span>
                        Page {page}
                    </span>
                    
                    <button
                        onClick={handleNext}
                        disabled={plannings.length < limit}
                        className={styles.paginationBtn}
                    >
                       <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}