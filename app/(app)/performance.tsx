import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface SemesterPerformance {
    semester: number;
    gpa: number;
    creditsEarned: number;
    subjects: Array<{ name: string; grade: string; credits: number }>;
}

const mockPerformanceData: SemesterPerformance[] = [
    {
        semester: 1,
        gpa: 9.5,
        creditsEarned: 18,
        subjects: [
            { name: 'Introduction to Programming', grade: 'A', credits: 4 },
            { name: 'Calculus I', grade: 'B+', credits: 4 },
            { name: 'Physics I', grade: 'A-', credits: 4 },
            { name: 'Communication Skills', grade: 'A', credits: 3 },
            { name: 'Engineering Drawing', grade: 'B', credits: 3 },
        ],
    },
    {
        semester: 2,
        gpa: 8.7,
        creditsEarned: 19,
        subjects: [
            { name: 'Data Structures', grade: 'A+', credits: 4 },
            { name: 'Calculus II', grade: 'A', credits: 4 },
            { name: 'Physics II', grade: 'B+', credits: 4 },
            { name: 'Workshop Practice', grade: 'A', credits: 3 },
            { name: 'Environmental Science', grade: 'A-', credits: 4 },
        ],
    },
    {
        semester: 3,
        gpa: 9.2,
        creditsEarned: 17,
        subjects: [
            { name: 'Algorithms', grade: 'B', credits: 4 },
            { name: 'Linear Algebra', grade: 'B-', credits: 4 },
            { name: 'Digital Electronics', grade: 'C+', credits: 4 },
            { name: 'Economics', grade: 'A', credits: 3 },
            { name: 'Probability and Statistics', grade: 'B+', credits: 2 },
        ],
    },
    {
        semester: 4,
        gpa: 8.8,
        creditsEarned: 20,
        subjects: [
            { name: 'Operating Systems', grade: 'A', credits: 4 },
            { name: 'Database Management', grade: 'A-', credits: 4 },
            { name: 'Computer Networks', grade: 'B+', credits: 4 },
            { name: 'Software Engineering', grade: 'A', credits: 4 },
            { name: 'Professional Ethics', grade: 'A+', credits: 4 },
        ],
    },
];

export default function DocumentScreen() {
    // const chartData = mockPerformanceData.map((semester) => ({
    //   name: `Sem ${semester.semester}`,
    //   gpa: semester.gpa,
    // }));
    // chartData is not used with the placeholder, but can be kept for future chart implementation.

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Student Performance Dashboard</Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>GPA Trend Over Semesters</Text>
                    <View style={styles.chartContainer}>
                        {/*
                            Replace this with a React Native chart.
                        */}
                        <Text style={styles.placeholderText}>
                            [Chart Placeholder: Use a React Native Charting Library]
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Semester-wise Performance Details</Text>
                {mockPerformanceData.map((semesterData) => (
                    <View key={semesterData.semester} style={styles.card}>
                        <Text style={styles.semesterTitle}>Semester {semesterData.semester}</Text>
                        <View style={styles.infoGrid}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoText}>
                                    <Text style={styles.infoLabel}>GPA: </Text>
                                    <Text style={styles.gpaValue}>{semesterData.gpa.toFixed(2)}</Text>
                                </Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoText}>
                                    <Text style={styles.infoLabel}>Credits Earned: </Text>
                                    <Text style={styles.infoValue}>{semesterData.creditsEarned}</Text>
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.subjectsTitle}>Subject Breakdown:</Text>
                        <View style={styles.table}>
                            <View style={styles.tableHeaderRow}>
                                <Text style={[styles.tableHeaderText, styles.subjectColumn]}>Subject Name</Text>
                                <Text style={[styles.tableHeaderText, styles.gradeColumn]}>Grade</Text>
                                <Text style={[styles.tableHeaderText, styles.creditsColumn]}>Credits</Text>
                            </View>
                            {semesterData.subjects.map((subject, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.tableDataRow,
                                        index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd,
                                    ]}
                                >
                                    <Text style={[styles.tableCellText, styles.subjectColumn]}>{subject.name}</Text>
                                    <Text style={[styles.tableCellText, styles.gradeColumn]}>{subject.grade}</Text>
                                    <Text style={[styles.tableCellText, styles.creditsColumn]}>{subject.credits}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#f0f2f5', // Light gray background for the scroll area
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20, // Ensure space at the bottom
    },
    container: {
        flex: 1,
        padding: 15,
    },
    mainTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#1a202c', // Darker text
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5, // For Android shadow
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600', // Semi-bold
        marginBottom: 15,
        color: '#2d3748',
    },
    chartContainer: {
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7fafc', // Very light gray for chart background
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0', // Light border
        padding: 10,
    },
    placeholderText: {
        color: '#718096', // Medium gray
        fontSize: 16,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10, // Add some space above if it's after a card
        marginBottom: 15,
        color: '#1a202c',
    },
    semesterTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        color: '#4a5568', // Slightly lighter than cardTitle
    },
    infoGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    infoItem: {
        flex: 1,
        alignItems: 'flex-start', // Align text to the start
        paddingHorizontal: 5, // Add some padding if items are too close
    },
    infoText: {
        fontSize: 16,
        color: '#4a5568',
        lineHeight: 24, // Improve readability
    },
    infoLabel: {
        fontWeight: '600', // Semi-bold for labels
        color: '#2d3748',
    },
    gpaValue: {
        fontWeight: 'bold',
        color: '#38a169', // Green for positive metric
    },
    infoValue: {
        fontWeight: 'normal', // Default weight for general values
        color: '#4a5568',
    },
    subjectsTitle: {
        fontSize: 17,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 8,
        color: '#4a5568',
    },
    table: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 8,
        overflow: 'hidden', // Ensures border radius is applied to children
    },
    tableHeaderRow: {
        flexDirection: 'row',
        backgroundColor: '#edf2f7', // Light background for header
        borderBottomWidth: 1,
        borderColor: '#e2e8f0',
    },
    tableHeaderText: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: '#2d3748',
        fontSize: 14,
        textAlign: 'left',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    subjectColumn: {
        flex: 3, // Takes more space
        textAlign: 'left',
    },
    gradeColumn: {
        flex: 1,
        textAlign: 'center',
    },
    creditsColumn: {
        flex: 1,
        textAlign: 'center',
    },
    tableDataRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#e2e8f0',
        alignItems: 'center', // Vertically center content in rows
    },
    tableRowEven: {
        backgroundColor: '#ffffff',
    },
    tableRowOdd: {
        backgroundColor: '#f7fafc', // Slightly different for odd rows (striping)
    },
    tableCellText: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: '#4a5568',
        fontSize: 14,
    },
});
